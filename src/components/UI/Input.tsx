import React from 'react'


interface InputProps {
    wrapperClassname: string,
    type: string,
    placeholder: string,
}


export default function Input(props: InputProps) {
    return (
        <div className={`form-input ${props.wrapperClassname}`.trim()}>
            <input
                type={props.type}
                placeholder={props.placeholder}
            />
        </div>
    )
}
