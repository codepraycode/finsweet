import React from 'react'


interface SectionProps {
    children: React.ReactNode,
    padded?: boolean,
    name: string,
    wrapperClassName?: string,
    containerClassName?: string
}

export default function Section(props: SectionProps) {

    let containerClassName = props.name + " container ";

    if (props.padded) containerClassName += "container--padded ";
    
    return (
        <section className={`${props.wrapperClassName}`}>
            <div className={containerClassName.trim()}>
                { props.children }
            </div>
        </section>
    )
}
