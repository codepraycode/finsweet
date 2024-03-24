import Link from 'next/link';
import React from 'react';
import Button from './Button';

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
                                className={`${item.active ? 'active' : ''}`}
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
