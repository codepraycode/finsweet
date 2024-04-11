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


function isPathActive(urlPath: string, link: string) {

    if ((urlPath === '/') && (link !== '/') ) return false;

    return link.includes(urlPath);
}

export default function NavLinks({ links, cta }: NavLinksProps ) {
    const path = usePathname();

    return (
        <nav>
            <label className="hambugger" htmlFor='menu-toggle'>
                <input type="checkbox"
                    name="menu-toggle"
                    id="menu-toggle"
                />
            </label>

            <div className="nav-wrapper">

                <ul>
                    {
                        links.map((item, i) => (
                            <li key={i}>
                                <Link
                                    href={item.url}
                                    className={`${isPathActive(path, item.url) ? 'active' : ''}`}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))
                    }
                </ul>

                { cta }
            </div>
        </nav>
    )
}
