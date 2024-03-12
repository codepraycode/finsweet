

import Link from 'next/link'
import React from 'react'

function Header() {
    return (
        <div className='bg-hero'>
            <div className="container header-top text-white">
                <div className="logo" />
                

                <nav>
                    <ul>
                        <li>
                            <Link href="/" className='active'>Home</Link>
                        </li>
                        <li>
                            <Link href="/services">Service</Link>
                        </li>
                        <li>
                            <Link href="/company">Company</Link>
                        </li>
                        <li>
                            <Link href="/career">Career</Link>
                        </li>
                        <li>
                            <Link href="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link href="/contact-us">Contact Us</Link>
                        </li>
                    </ul>

                    <button className='btn btn-transparent text-active btn-with-arrow'>
                        Clone project
                    </button>
                </nav>
            </div>
        </div>
    )
}

export default Header
