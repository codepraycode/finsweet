'use client';

import { PaystackButton } from 'react-paystack';
import Input from "../UI/Input";
import { useEffect, useState } from "react";
import { Payment, PaymentModel } from '@/lib/nobox/structures';
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
    bookId: string,
    baseUrl: string
}

const sendMail = (email:string, subject:string, link:string) => {
    fetch("/api/mail", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            mail_to: email,
            subject,
            link
        })
    }).then((res)=>res.json())
    .then(data=>console.log(data))
    .catch((error)=>{
        console.error(error);
    })
}

export default function PayStackButton(props: PayStackButtonProps) {

    const pathname = usePathname();
    
    const handlePaystackSuccessAction = async (reference:{[k: string]: any}) => {
        const url = `${pathname}/?action=download&token=${reference.reference}`;
        
        const payment: Payment = {
            reference: reference.reference,
            email,
            title: props.title,
            bookId: props.bookId
        }

        // * Store reference, send mail
        setPaid(true);


        PaymentModel.insertOne(payment)
        .then(()=>{
            // Send Mail
            sendMail(payment.email, "Obtain your copy", url);
        }).catch((error)=>{
            console.error(error);
        })

        
    };

    const [email, setEmail] = useState("");
    const [paid, setPaid] = useState(false);


    let template = <p className='paid-text'>A copy has been sent to your email</p>;

    if (!paid) {
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
