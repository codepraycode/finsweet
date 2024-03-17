

import Link from 'next/link'
import React from 'react'
import Logo from './UI/Logo'
import NavLinks from './UI/NavLink'
import Button from './UI/Button'
import siteData from '@/data.json';


const {header} = siteData;



function Header() {
    return (
        <div className='bg-hero'>
            <div className="container header-top text-white">
                <Logo />


                <NavLinks
                    links={header.nav}

                    cta={
                        <Button
                            label='Clone project'
                            link={header.cta.link}
                            className={header.cta.className}
                        />
                    }
                />
            </div>
        </div>
    )
}

export default Header
