import Image from "next/image";
import siteData from '@/data/home.json';
import Button from "./UI/Button";
import Section from "./UI/Section";

const {subsidiaries} = siteData;

const colors = ['bg-orange', 'bg-gray']
const SubsidiariesSection = () => {
    return (
        <>
            


            {
                    subsidiaries.information.map((info, i) => (
                        <Section
                            key={i}
                            wrapperClassName={colors[i]}
                            name="services"
                            padded
                        >
                            {/* {
                                i === 0 && (
                                )
                            } */}
                            <h2 className="section-header">
                                {subsidiaries.title}
                            </h2>

                            <div className={`sub ${i % 2 !== 0 ? 'reverse' : ''}`}>
                                <div>
                                    <h2 className="section-h2">{info.name}</h2>
                                    <br/>
                                    <p>{info.description}</p>


                                    <h3 className="section-h4">Our services</h3>
                                    <div className="cards">
                                        {
                                            info.services.map((item, i) => (
                                                <article className="card" key={i}>
                                                    {/* <div className="card-icon">
                                                        <Image
                                                            src={item.icon.url}
                                                            alt={item.icon.alt}
                                                            width={item.icon.width}
                                                            height={item.icon.height}
                                                        />
                                                    </div> */}

                                                    <h3>{ item.title }</h3>
                                                    <p>
                                                        {item.decription}
                                                    </p>

                                                    <br/>

                                                    {/* <Button
                                                        link={item.cta.link}
                                                        label={item.cta.label}
                                                        className={item.cta.className}
                                                    /> */}
                                                </article>
                                            ))
                                        }
                                    </div>
                                </div>


                                <div  className="sub-logo" style={{backgroundImage:`url('${info.logo.url}')`}}/>
                            </div>
                        </Section>
                    ))
                }
        </>
    )
}

export default SubsidiariesSection;