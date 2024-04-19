
import Link from 'next/link'
import React from 'react'

interface LogoProps {
    negative?: boolean
}

export default function Logo() {
    return (
        <Link href="/">

            <div className="text-logo" >
                DonManuel Group
            </div>
        </Link>

    )
}

