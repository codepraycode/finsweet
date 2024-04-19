'use client'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'


export interface ButtonProps {
    label: string,
    link?: string | null,
    className: string,
}

export default function Button(props: ButtonProps) {

    const classNames = `btn ${props.className || ''}`.trim();

    return (
        <button className={classNames}>
            <Link
                href={props.link || '#'}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                }}>
                <div
                    style={{
                        marginRight: '10px',
                        width: "120px",
                        // fontSize: "16px"
                    }}>
                    {props.label}
                </div>
                <Image
                    style={{
                        marginRight: '10px',
                    }}
                    src="/images/icons/arrow-point-right.svg"
                    alt="Arrow right"
                    width={35}
                    height={20} />
            </Link>
        </button>
    )
}
