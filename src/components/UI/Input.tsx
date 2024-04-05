import React from 'react'


interface InputProps {
    wrapperClassname: string,
    type: string,
    placeholder: string,
    icon?: string,
}


export default function Input(props: InputProps) {
    return (
        <div className={`form-input ${props.wrapperClassname}`.trim()}>

            <form action="/search/" method='get'>
                <input
                    type={props.type}
                    placeholder={props.placeholder}
                    name='query'
                />
            </form>
        </div>
    )
}
