import React from 'react'


interface ButtonProps {
    label: string,
    isLink?: boolean
}

export default function Button(props: ButtonProps) {

    if (props.isLink) {
        return (
            <button className='btn btn-transparent text-active btn-with-arrow'>
                {props.label}
            </button>
        )
    }

    return (
        <button className="btn btn-with-arrow btn-shape-bg">
            {props.label}
        </button>
    )
}
