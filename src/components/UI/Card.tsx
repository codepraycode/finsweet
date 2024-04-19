import Image from "next/image";

export const Card = ({ title, description, icon }: {
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
            <div className="card-icon float-left">
                <Image
                    src={icon.url}
                    alt={icon.alt}
                    width={icon.width}
                    height={icon.height}
                />
            </div>

            <div className="float-right">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>


        </article>
    )
}