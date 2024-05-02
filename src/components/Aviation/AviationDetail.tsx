'use client';

import React from 'react'
import { XLargeCard } from '../UI/XLargeCard'
import { useRouter } from 'next/navigation';
import { Aviation } from '@/lib/nobox/structures';
import { NoboxResponse } from '@/lib/nobox-client';

export default function AviationDetail({data:d}:{data: NoboxResponse<Aviation>}) {

    const router = useRouter();

    const onClick = () => {
        // window.open("aviation/" + d.slug, '_blank');
        router.push(`/aviation/${d.slug}`);
    }

    return (
        <XLargeCard
            onClick={onClick}
            icon={{
                url: d.logo || "/images/icons/cog.svg",
                alt: d.company_name,
                width: 200,
                height: 100
            }}
            title={d.name}
            description={d.details}
            pills={[
                {
                    label: "Fleet Size",
                    value: String(d.fleet_size || "Unknown"),
                },
                {
                    label: "Routes",
                    value: String(d.routes.length || ""),
                },
                {
                    label: "Website",
                    value: d.link,
                    clickable: true
                },
            ]}
            cta={{
                link: d.link,
                label: d.link,
                className: "btn-transparent btn-with-arrow arrow-dark nav-cta"
            }}
        />
    )
}
