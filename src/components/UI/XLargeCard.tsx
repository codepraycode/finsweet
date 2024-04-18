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
    pills?: {
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
        <article className="card l-card" onClick={onClick} style={{
            cursor: "pointer",
        }}>
            <div className="card-icon">
                <Image
                    style={{
                        border: "0px solid #fff",
                    }}
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
            {
                pills ? (<p>

                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                    }}>
                        {pills.map(pill => {

                            const onClick = () => {
                                if (pill.clickable) {
                                    window.open("https://" + pill.value, '_blank');
                                }
                            }

                            if (pill.clickable) {

                                return (
                                    <div
                                        onClick={onClick}
                                        key={pill.label}
                                        style={{
                                            borderRadius: '2px',
                                            color: "hsl(229, 38%, 23%)",
                                            cursor: "pointer",
                                            padding: '3px 10px',
                                            textDecoration: "underline",
                                            marginRight: '10px',
                                        }}
                                    >{pill.label}: {pill.value}</div>
                                )
                            }

                            return (
                                <span
                                    onClick={onClick}
                                    key={pill.label}
                                    style={{
                                        borderRadius: '2px',
                                        color: "hsl(229, 38%, 23%)",

                                        padding: '3px 10px',
                                        marginRight: '10px',
                                    }}
                                >{pill.label}: {pill.value}</span>
                            )
                        })}
                    </div>
                </p>) : <></>
            }
        </article >
    </>
}

