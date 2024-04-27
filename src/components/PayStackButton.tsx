'use client';

import { PaystackButton } from 'react-paystack';
import Input from "./UI/Input";
import { useState } from "react";
import { PaymentModel } from '@/lib/nobox/structures';
import { usePathname } from 'next/navigation';



const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || "null";

const config = {
    reference: (new Date()).getTime().toString(),
    publicKey: publicKey,
};

// you can call this function anything
const handlePaystackCloseAction = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log('closed')
}

const componentProps = {
    ...config,
    // text: 'Paystack Button Implementation',
    
    onClose: handlePaystackCloseAction,
};




export interface PayStackButtonProps {
    label: string,
    className: string,
    price: number,
    title: string,
    baseUrl: string
}

const sendMail = async (email:string, subject:string, link:string) => {

    try {

        const res = await fetch("/api/mail", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                mail_to: email,
                subject,
                link
            })
        })
        
        const data = await res.json();
    
    
        if (data.error?.cause) {
            throw new Error(data.error.cause.message)
        }
    } catch(err) {
        console.error(err);
        throw new Error("Could not send mail")
    }


}

export default function PayStackButton(props: PayStackButtonProps) {

    const pathname = usePathname();

    const location = new URL(window?.location.href);
    
    const handlePaystackSuccessAction = async (reference:{[k: string]: any}) => {
        const url = `${location.origin}${pathname}/?action=download&token=${reference.reference}`;
        
        const payment = {
            reference: reference.reference,
            email,
            title: props.title,
        }

        // * Store reference, send mail
        setPaid(true);


        
        try {
            await PaymentModel.insertOne(payment)
            await sendMail(payment.email, "Obtain your copy", url)
        } catch(err: any) {
            setError(()=>err.message);
        }

        
    };

    const [email, setEmail] = useState("");
    const [paid, setPaid] = useState(false);
    const [error, setError] = useState<string | null>(null);


    let template = <p className='paid-text'>A copy has been sent to your email</p>;

    if (error) template = <p className='paid-text'>Anerror occured: {error} <br/> You can refresh and try again</p>;

    else if (!paid) {
        template = (
            <>
                <Input
                    wrapperClassname='paystack-input'
                    placeholder={"Enter your email"}
                    type={"text"}
                    onChange={(val)=>{
                        // * Validate email before updating state.
                        setEmail(val);
                    }}
                    onSubmit={()=>null}
                    required
                />

                <PaystackButton
                    className={props.className}
                    text={props.label}
                    email={email}
                    amount={props.price * 100}
                    onSuccess={(reference:any) => handlePaystackSuccessAction(reference)}
                    {...componentProps}
                />
            </>
        )
    }

    return (
      <div className="pay-wrapper">
        {template}
      </div>
    )
}
