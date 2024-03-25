import Image from "next/image";
import Link from "next/link";
import siteData from '@/data.json';
import Button from "./UI/Button";
import Section from "./UI/Section";


const {aboutUs} = siteData;

const AboutSection = () => {
    return (
        <Section
            name="about_us"
            padded
        >
            <h1 className="section-header text-uppercase">{aboutUs.title}</h1>
            
            <div className="_top">

                <div>

                    <h2 className="section-h1">
                        {aboutUs.subTitle1}
                    </h2>

                    <p className="section-p">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae inventore ipsum quidem doloribus quibusdam quod quos corrupti sunt. Quisquam odit expedita, sint veniam alias sequi natus quae labore soluta temporibus.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae inventore ipsum quidem doloribus quibusdam quod quos corrupti sunt. Quisquam odit expedita, sint veniam alias sequi natus quae labore soluta temporibus.
                    </p>
                </div>


                <div className="sections">

                    {
                        aboutUs.sections.map((item, i)=>(
                            <p key={i}>
                                <span className="section-h2">
                                    {item.title}
                                </span> <br />
                                <span className="section-p">
                                    {item.paragraph}
                                </span>
                            </p>
                        ))
                    }
                </div>
            </div>


            <div className="img_lineup">
                {
                    aboutUs.featuredImages.map((item, i) => (
                        <div
                            key={i}
                            className="img_wrapper"
                            style={{backgroundImage: `url(${item.url})`}}
                        />
                    ))
                }
            </div>

            <div className="info-cta">
                <div>

                    {
                        aboutUs.portfolio.points.map((item, i) => (
                            <div key={i}>
                                <span>{item.point}</span> 
                                <br />
                                {/* Border design */}
                                <span>{item.description}</span>
                            </div>
                        ))
                    }
                </div>

                <Button
                    label={aboutUs.portfolio.cta.label}
                    className={aboutUs.portfolio.cta.className}
                    link={aboutUs.portfolio.cta.link}
                />

                {/* <Link href={"/about-us"} className="btn btn-transparent btn-with-arrow arrow-dark nav-cta">
                    Read about us
                </Link> */}
            </div>
        </Section>
    )
}

export default AboutSection;