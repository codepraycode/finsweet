import React from 'react';
import siteData from "@/data.json";

const {newsletter} = siteData;


export default function NewsLetter() {
    return (
        <div className="newsletter">
            <h1 >
                <span className="section-header">
                    {newsletter.title}
                </span>
                
                <span className="section-h1">
                    { newsletter.subTitle }
                </span>
            </h1>

            <div className="newsletter-input">
                <input
                    type={newsletter.input.type}
                    placeholder={newsletter.input.placeholder}
                />
            </div>
        </div>
    )
}
