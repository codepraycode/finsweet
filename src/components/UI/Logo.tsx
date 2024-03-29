
import React from 'react'

interface LogoProps {
    negative?:boolean
}


export default function Logo({ negative }: LogoProps) {

    const style = {
        backgroundImage: negative ?
            "url('/images/logo-negative.svg')":
            "url('/images/logo.svg')"
    }

    return (
        <div className={"logo"} style={style} />
    )
}

