import React from 'react'

export default function ContactForm({handleSent}:{handleSent: ()=>void}) {
  return (
    <>
        <h3 className='with-smiley'>Reach out to us</h3>
        <form action="/" onSubmit={(e)=>{
            e.preventDefault();

            handleSent()
        }}>

            <label htmlFor="name" className='form-group'>

                <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    autoComplete="off"
                />

                <span>Your fullname</span>
            </label>
            <label htmlFor="email" className='form-group'>

                <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    autoComplete="off"
                />

                <span>Your email address</span>
            </label>
            <label htmlFor="message" className='form-group'>

                <textarea
                    // type="text"
                    name="message"
                    placeholder="What's your message"
                    autoComplete="off"
                />

                <span>Your message</span>
            </label>

            <button type="submit" className="btn btn-transparent btn-send">
                Send
            </button>
        </form>
    </>
  )
}
