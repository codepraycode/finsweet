import siteData from "@/data.json";
import Section from "./UI/Section";
import { Card } from "./UI/Card";

const { expertise } = siteData;

const ExpertiseSection = () => {
    return (
        <Section
            wrapperClassName="bg-blue-accent"
            name="expertise"
            padded
        >
            <div>

                <h2 className="section-header">
                    {expertise.title}
                </h2>
                <div>
                    <span className="section-h1">
                        {expertise.main}
                    </span>

                    <div className="section-p">
                        {expertise.paragraph}
                    </div>
                </div>
            </div>

            <div className="cards">
                {
                    expertise.deliverables.map((item, i) => (

                        <Card
                            key={i}
                            {...item}
                        />
                    ))
                }
            </div>

        </Section>
    )
}


export default ExpertiseSection;