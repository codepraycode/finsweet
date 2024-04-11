import Image from "next/image";
import siteData from '@/data/home.json';
import Section from "./UI/Section";

const { coreValues } = siteData;

const CoreValuesSection = () => {
    return (
        <Section
            wrapperClassName="bg-blue-accent"
            name="coreVal"
            containerClassName="coreVal_wrapper"
            padded
        >

            <div className="cards">
                <h2 className="card exceptional section-header">
                    { coreValues.title }
                </h2>
                {
                    coreValues.deliverables.map((item, i) => (

                        <article
                            className="card border-radius"
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

        </Section>
    )
}

export default CoreValuesSection;