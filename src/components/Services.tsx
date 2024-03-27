import Image from "next/image";
import siteData from '@/data/home.json';
import Button from "./UI/Button";
import Section from "./UI/Section";

const {services} = siteData;

const ServicesSection = () => {
    return (
        <Section
            wrapperClassName="bg-orange"
            name="services"
            padded
        >

            <h2 className="section-header">
                {services.title}
            </h2>
            
            <p className="section-h1 half-length">
                {services.main}
            </p>

            <Button
                className={services.cta.className}
                label={services.cta.label}
                link={services.cta.link}
            />

            <div className="cards">
                {
                    services.deliverables.map((item, i) => (
                        <article className="card" key={i}>
                            <div className="card-icon">
                                <Image
                                    src={item.icon.url}
                                    alt={item.icon.alt}
                                    width={item.icon.width}
                                    height={item.icon.height}
                                />
                            </div>

                            <h3>{ item.title }</h3>
                            <p>
                                {item.description}
                            </p>

                            <br/>

                            <Button
                                link={item.cta.link}
                                label={item.cta.label}
                                className={item.cta.className}
                            />
                        </article>
                    ))
                }
            </div>

        </Section>
    )
}

export default ServicesSection;