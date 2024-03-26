import React from 'react'


interface SectionProps {
    children: React.ReactNode,
    padded?: boolean,
    name: string,
    wrapperClassName?: string,
    containerClassName?: string
}

export default function Section(props: SectionProps) {

    let containerClassName =  "container " + props.containerClassName;

    if (props.padded) containerClassName += " container--padded ";
    
    return (
        <section className={`${props.name} ${props.wrapperClassName}`}>
            <div className={`${containerClassName}`.trim()}>
                { props.children }
            </div>
        </section>
    )
}
