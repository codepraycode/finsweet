import Image from "next/image";
import siteData from "@/data.json";

const { expertise } = siteData;

const ExpertiseSection = () => {
    return (
        <section className="bg-blue-accent">

            <div className="container container--padded expertise">

                <div>

                    <h2 className="section-header">
                        { expertise.title }
                    </h2>
                    <p>
                        <span className="section-h1">
                            {expertise.main}
                        </span>

                        <div className="section-p">
                            {expertise.paragraph}
                        </div>
                    </p>
                </div>

                <div className="cards">
                    {
                        expertise.deliverables.map((item, i) => (

                            <article
                                className="card"
                                key={i}
                            >
                                <div className="card-icon float-left">
                                    <Image
                                        src={item.icon.url}
                                        alt={item.icon.alt}
                                        width={item.icon.width}
                                        height={item.icon.height}
                                    />
                                </div>

                                <div className="float-right">
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>


                            </article>
                        ))
                    }
                </div>

            </div>

        </section>
    )
}

export default ExpertiseSection;