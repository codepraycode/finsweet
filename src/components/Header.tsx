import React from 'react'
import Logo from './UI/Logo'
import NavLinks from './UI/NavLink'
import Button from './UI/Button'
import siteData from '@/data/common.json';

const { header } = siteData;

function Header() {
    return (
        <header className='bg-primary'>
            <div className="container header-wrapper text-white">
                <Logo />
                 <label className="hambugger" htmlFor='menu-toggle'>
                    <input type="checkbox"
                        name="menu-toggle"
                        id="menu-toggle"
                    />
                </label>
                <NavLinks
                    links={header.nav}
                    cta={
                        <Button
                            label={header.cta.label}
                            link={header.cta.link}
                            className={header.cta.className}
                        />
                    }
                />
               
            </div>
        </header>
    )
}

export default Header