'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React from 'react'


interface ButtonProps {
    label: string,
    link?: string | null,
    className: string,
    navTo?:string,
}

export default function Button(props: ButtonProps) {

    const classNames =`btn ${props.className || ''}`.trim();
    const route = useRouter();

    if (props.link) {
        return (
            <Link href={props.link} className={classNames}>
                {props.label}
            </Link>
        )
    }

    return (
        <button className={classNames} onClick={()=>{
            if (props.navTo) route.push(props.navTo);
        }}>
            {props.label}
        </button>
    )
}
