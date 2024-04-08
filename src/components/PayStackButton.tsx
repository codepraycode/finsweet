'use client';

import { PaystackButton } from 'react-paystack';
import Input from "./UI/Input";
import { useState } from "react";



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




interface PayStackButtonProps {
    label: string,
    className: string,
    price: number,
}

export default function PayStackButton(props: PayStackButtonProps) {
  
    const handlePaystackSuccessAction = (reference:any) => {
        // Implementation for whatever you want to do with reference and after success call.
        console.log(reference);
        setPaid(true);
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
