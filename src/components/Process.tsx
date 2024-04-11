import Image from "next/image";
import siteData from '@/data/home.json';
import Section from "./UI/Section";

const {process} = siteData;


const ProcessSection = () => {
    return (
        <Section
            name="process"
            padded
        >

            <h2 className="section-header">{process.title}</h2>
            
            <p className="half-length">
                <span className="section-h1"> 
                    {process.main}
                </span>

                <span className="section-p half-length--more">
                    {process.paragraph}
                </span>
            </p>

            <br /><br />

            <div className="cards cards-linked">
                {
                    process.milestones.at(0)!.map((item, i) => (

                        <article key={i} className="card">
                            <div className="card-icon float-left">
                                <Image
                                    src={ item.icon.url}
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

            <br/><br/>
            <div className="cards cards-linked">
                {
                    process.milestones.at(1)!.map((item, i) => (

                        <article key={i} className="card">
                            <div className="card-icon float-left">
                                <Image
                                    src={ item.icon.url}
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

        </Section>
    )
}

export default ProcessSection;