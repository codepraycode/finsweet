import Image from "next/image";

export const RouteCard = ({ title, description, icon }: {
    title: string;
    description: string;
    icon: {
        url: string;
        alt: string;
        width: number;
        height: number;
    }
}) => {
    return (
        <article
            className="card s-card"
        >
            {/* <div className="card-icon float-left">
                <Image
                    src={icon.url}
                    alt={icon.alt}
                    width={icon.width}
                    height={icon.height}
                />
            </div> */}

            <div className="float-right routes">
                <p><b>Origin:</b> &nbsp;&nbsp;{title}</p>
                <p><b>Destination:</b>&nbsp;&nbsp;{description}</p>
            </div>


        </article>
    )
}