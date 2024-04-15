
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface LogoProps {
    negative?: boolean
}


export default function Logo({ negative }: LogoProps) {
    return (
        <Link href="/">

            <div className="text-logo" >
                DonManuel Group
            </div>
        </Link>

    )
}

