
import React from 'react'
import Logo from './UI/Logo'
import NavLinks from './UI/NavLink'
import Button from './UI/Button'
import siteData from '@/data/common.json';


const {header} = siteData;


function Header() {
    return (
        <header className='bg-hero'>
            <div className="container header-wrapper text-white">
                <Logo />


                <NavLinks
                    links={header.nav}

                    cta={
                        <Button
                            label={header.cta.label}
                            link={header.cta.link}
                            className={header.cta.className}
                            navTo={header.cta.navTo}
                        />
                    }
                />

            </div>
        </header>
    )
}

export default Header
