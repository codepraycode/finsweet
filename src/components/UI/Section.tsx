import React from 'react'


interface SectionProps {
    children: React.ReactNode,
    padded?: boolean,
    name: string,
    wrapperClassName?: string,
    containerClassName?: string
    style?: React.CSSProperties;
}

export default function Section(props: SectionProps) {

    let containerClassName = props.name + " container ";

    if (props.padded) containerClassName += "container--padded ";

    return (
        <section className={`${props.wrapperClassName}`} style={props.style || ({})}>
            <div className={containerClassName.trim()}>
                {props.children}
            </div>
        </section >
    )
}
