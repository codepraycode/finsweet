'use client';

import { PaystackButton } from 'react-paystack';
import Input from "./UI/Input";
import { useEffect, useState } from "react";
import { Payment, PaymentModel } from '@/lib/nobox/structures';
import PayStackButton, { PayStackButtonProps } from './PayStackButton';
import Button from './UI/Button';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';



async function validateToken(token: string) {
    const data = await PaymentModel.findOne({reference: token});

    if (!data || data?.used) return null;

    return data;
}

async function inValidateToken(token: string) {
    const data = await PaymentModel.findOne({reference: token});

    if (data.used) return null;

    await PaymentModel.updateOne({reference: token}, {used: true});
}

export default function DownloadBook(props: PayStackButtonProps) {

    const [paymentData, setPaymentData] = useState<Payment & {id: string} | null | undefined>(undefined);

    const searchParams = useSearchParams();
    const action = searchParams.get("action");
    const token = searchParams.get("token")


    


    useEffect(()=>{
        (async()=>{
            if (action === "download" && token) {
                const payRecord = await validateToken(token);

                // if (!payRecord) return;

                setPaymentData(payRecord);
            }
        })()
    }, [action, token])

    let template;
    
    
    if (paymentData === undefined) template = <p>Loading....</p>;

    if (!paymentData || paymentData.used) template = <PayStackButton {...props}/>;


    else {
        template = (
            <>
                <a
                    href={"http://localhost:3000/book.pdf"}
                    download
                    onClick={(e)=>{
                        inValidateToken(paymentData.reference)
                    }}
                    className='btn btn-download'
                >
                    Download Book
                </a>
            </>
        )
    }

    return (
      <div className="pay-wrapper">
        {template}
      </div>
    )
}
