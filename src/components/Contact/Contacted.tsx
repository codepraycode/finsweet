import React from 'react'

export default function Contacted({handleSent}:{handleSent: ()=>void}) {
    return (
        <>
            <br/><br/>
            <h1 className="text-center with-smiley">We have received your message</h1>
            <button
                className="btn btn-transparent btn-resend"
                onClick={()=>handleSent()}
            >
                Send another message
            </button>
            <br/>  
        </>
    )
}
