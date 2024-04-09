'use client';

import { PaystackButton } from 'react-paystack';
import Input from "./UI/Input";
import { useState } from "react";
import { PaymentModel } from '@/lib/nobox/structures';
import PayStackButton, { PayStackButtonProps } from './PayStackButton';
import Button from './UI/Button';
import Link from 'next/link';


const appUrl = process.env.NEXT_PUBLIC_APP_URL;

export default function DownloadBook(props: PayStackButtonProps) {

    
    const valid = true;

    let template = <PayStackButton {...props}/>;

    if (valid) {
        template = (
            <>
                <Link
                    href={"/"}
                    download
                    onClick={(e)=>e.preventDefault()}
                    className='btn btn-download'
                >
                    Download Book
                </Link>
            </>
        )
    }

    return (
      <div className="pay-wrapper">
        {template}
      </div>
    )
}
