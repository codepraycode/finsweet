'use client';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

type NavLink = {
    url: string,
    active?: boolean,
    label: string,
}


interface NavLinksProps {
    links: NavLink[];
    cta?: React.ReactNode
}

export default function NavLinks({ links, cta }: NavLinksProps ) {
    const pathname = usePathname();

    return (
        <nav className="nav-wrapper">
            
            <ul>
                {
                    links.map((item, i) => {

                        const isActive = pathname === item.url;
                        
                        return (
                        <li key={i}>
                            <Link
                                href={item.url}
                                className={`${isActive ? 'active' : ''} text-logo`}
                            >
                                {item.label}
                            </Link>
                        </li>
                    )})
                }
            </ul>

            { cta }
        </nav>
    )
}
