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
            <h2 className="section-header text-uppercase">{aboutUs.title}</h2>
            
            <div className="_top">
                <p className="section-h1">
                    {aboutUs.subTitle1}
                </p>
                <p>
                    <span className="section-h2">
                        {aboutUs.subTitle2}
                    </span> <br />
                    <span className="section-p">
                        {aboutUs.paragraph}
                    </span>
                </p>
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