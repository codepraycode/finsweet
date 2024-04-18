'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React from 'react'


export interface ButtonProps {
    label: string,
    link?: string | null,
    className: string,
    navTo?:string,
    onClick?: ()=>void
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
            if (props.onClick) props.onClick();
        }}>
            {props.label}
        </button>
    )
}
