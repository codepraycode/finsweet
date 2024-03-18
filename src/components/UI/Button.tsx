import Link from 'next/link'
import React from 'react'


interface ButtonProps {
    label: string,
    link?: string | null,
    className: string
}

export default function Button(props: ButtonProps) {

    const classNames =`btn ${props.className || ''}`.trim();

    if (props.link) {
        return (
            <Link href={props.link} className={classNames}>
                {props.label}
            </Link>
        )
    }

    return (
        <button className={classNames}>
            {props.label}
        </button>
    )
}
