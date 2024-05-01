'use client';

import { useState } from "react";
import ContactForm from "./ContactForm";
import Contacted from "./Contacted";

export default function ContactUs() {


    const [sent, setSent] = useState(false);

    return (
        <div className="form-wrapper">

            {
                !sent ? (
                    <>
                        <ContactForm handleSent={()=>setSent(true)}/>
                    </>
                ) :(
                    <Contacted handleSent={()=>setSent(false)}/>
                )
            }

        </div>
    )
}
