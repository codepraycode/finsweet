import Image from "next/image";
import Button from "./Button";

export const LargeCard = ({ icon, title, description, cta }: {
    icon: {
        url: string;
        alt: string;
        width: number;
        height: number;
    },
    title: string;
    description: string;
    cta: {
        link: string;
        label: string;
        className?: string;
    }

}) => {
    return <>
        <article className="card l-card">
            <div className="card-icon">
                <Image
                    src={icon.url}
                    alt={icon.alt}
                    width={icon.width}
                    height={icon.height}
                />
            </div>

            <h3>{title}</h3>
            <p>
                {description}
            </p>
            <br />

            <Button
                link={`https://${cta.link}`}
                label={cta.label}
                className={cta.className || ""}
            />
        </article>
    </>
}