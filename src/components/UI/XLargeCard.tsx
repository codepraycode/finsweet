import { parseExternalLink } from "@/utils/parseUrl";
import Image from "next/image";

export const XLargeCard = ({ icon, title, description, pills, onClick }: {
    icon: {
        url: string;
        alt: string;
        width: number;
        height: number;
    },
    title: string;
    description: string;
    pills: {
        label: string;
        value?: string;
        clickable?: boolean;
    }[];
    cta: {
        link: string;
        label: string;
        className?: string;
    };
    onClick: () => void;
}) => {
    return <>
        <article className="card l-card airline-card" onClick={onClick}>
            <div className="card-icon">
                <Image
                    // style={{
                    //     border: "0px solid #fff",
                    // }}
                    src={icon.url}
                    alt={icon.alt || ""}
                    width={icon.width}
                    height={icon.height}
                />
            </div>

            <h3>{title}</h3>

            <div className="other-details">

                <p>
                    {description || (
                        <i>Description not available</i>
                    )}
                </p>

                
                {
                    (pills.length >= 1) && (
                        <div className="pills">
                            {pills.map(pill => {

                                const onClick = (e: any) => {
                                    e.preventDefault();

                                    if (pill.clickable && Boolean(pill.value) && pill.value !== "/") {
                                        // window.open("https://" + pill.value, '_blank');
                                        const _url = parseExternalLink(pill.value!);

                                        window.open(_url, '_blank');
                                    }
                                }


                                return (
                                    <a
                                        onClick={onClick}
                                        // href={parseExternalLink(pill.value!)}
                                        data-clickable={pill.clickable}
                                        key={pill.label}
                                        className="pill"
                                        style={{
                                            borderRadius: '2px',
                                            color: "hsl(229, 38%, 23%)",
                                            cursor: "pointer",
                                            padding: '3px 10px',
                                            textDecoration: "underline",
                                            marginRight: '10px',
                                        }}
                                    >{pill.label}: {pill.value}</a>
                                )
                            })}
                        </div>
                    )
                }
            </div>
        </article >
    </>
}

