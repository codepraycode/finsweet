import React from 'react';
import siteData from "@/data/common.json";
import Input from './UI/Input';

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

            <Input
                wrapperClassname='newsletter-input'
                placeholder={newsletter.input.placeholder}
                type={newsletter.input.type}
            />
        </div>
    )
}
