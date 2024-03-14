import React from 'react'


interface ButtonProps {
    label: string,
}

export default function Button(props: ButtonProps) {
    return (
        <button className='btn btn-transparent text-active btn-with-arrow'>
            {props.label}
        </button>
    )
}
