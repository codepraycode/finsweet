import React from 'react'

export function DownloadBookTemplate({link}:{link:string}) {
  return (
        <>
            <h4>Hello there,</h4>

            <p>
                Thank you for purchasing my book, follow the link below to obtain your copy.
            </p>

            <a
                href={link}
                style={{
                    display: "block",
                    width: "130px",
                    backgroundColor: "#666eff",
                    color: "#fff",
                    padding: "15px",
                    borderRadius: "5px",
                    textDecoration: "none"
                }}
            >
                Get your copy
            </a>

            <br/><br/>

            or use this link:
            <br/><br/>

            <a href={link}>${link}</a>
        </>
    )
}
