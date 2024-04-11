'use client';


import { useEffect, useState } from "react";
import { Payment, PaymentModel } from '@/lib/nobox/structures';
import PayStackButton, { PayStackButtonProps } from './PayStackButton';
import { useSearchParams } from 'next/navigation';
import commonData from "@/data/common.json";

const {bookDownloadLink} = commonData




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
    const searchParams = useSearchParams();
    const action = searchParams.get("action");
    const token = searchParams.get("token")


    const [paymentData, setPaymentData] = useState<Payment & {id: string} | null | undefined>(()=>{
        if (!token) return null;

        return undefined
    });



    


    useEffect(()=>{
        (async()=>{
            if (action === "download" && token) {
                const payRecord = await validateToken(token);
                
                setPaymentData(payRecord);
            }
        })()
    }, [action, token])

    console.log(paymentData);

    let template;
    
    
    if (paymentData === undefined) template = <p>Loading....</p>;
    
    else if (!paymentData || paymentData.used) template = <PayStackButton {...props}/>;

    else {
        template = (
            <>
                <a
                    href={bookDownloadLink}
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
