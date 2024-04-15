import siteData from "@/data.json";
import Button from "./UI/Button";
import Section from "./UI/Section";
import { LargeCard } from "./UI/LargeCard";

const { services } = siteData;

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
            <div className="x-cards">
                {
                    services.deliverables.map((item, i) => (
                        <LargeCard
                            key={i}
                            {...item}
                        />
                    ))
                }
            </div>

        </Section>
    )
}



export default ServicesSection;