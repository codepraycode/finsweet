'use client'
import React, { useRef } from 'react'


interface InputProps {
    wrapperClassname: string,
    type: string,
    placeholder: string,
    icon?: string,
    onSubmit?: (val: any) => void,
    onChange?: (val: any | undefined) => void,
    action?: string,
    name?: string,
    required?: boolean
}


export default function Input(cProps: InputProps) {
    const {name, action, onSubmit, onChange, ...props} = cProps;
    const inputRef = useRef<HTMLInputElement | null>(null);


    return (
        <div className={`form-input ${props.wrapperClassname}`.trim()}>

            <form action={action} method='get' onSubmit={(e)=>{
                if (onSubmit) {
                    e.preventDefault();
                    let val = inputRef.current?.value
                    onSubmit(val);
                }
            }}>
                <input
                    type={props.type}
                    placeholder={props.placeholder}
                    name={name}
                    autoComplete='off'
                    ref={inputRef}
                    onChange={(e)=>{
                        if (onChange) onChange(e.target.value)
                    }}
                required={props.required}
                />
            </form>
        </div>
    )
}
