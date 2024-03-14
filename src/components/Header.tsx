

import Link from 'next/link'
import React from 'react'
import Logo from './UI/Logo'
import NavLinks from './UI/NavLink'
import Button from './UI/Button'
import appData from '@/data.json';

function Header() {
    return (
        <div className='bg-hero'>
            <div className="container header-top text-white">
                <Logo />


                <NavLinks
                    links={appData.header.nav}

                    cta={
                        <Button
                            label='Clone project'
                        />
                    }
                />
            </div>
        </div>
    )
}

export default Header
