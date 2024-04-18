'use client'
import data from '@/data/home.json';
import Section from "./UI/Section";
import Input from "./UI/Input";


const {hero, clients} = data;


const HeroSection = () => {
    return (
        <Section
            wrapperClassName="bg-hero"
            name="hero"
            containerClassName="hero-wrapper"
        >

                <h1 className="box-cap" data-aos="fade-left">
                    {hero.mainText}
                    
                    <span>
                        {hero.subText}
                    </span>
                    <br />


                    {/* <Button
                        label={hero.cta.label}
                        link={hero.cta.link}
                        className={hero.cta.className}
                    /> */}
                </h1>

                <div
                    className="hero_image"
                    style={{backgroundImage: `url(${hero.image.url})`}}
                    data-aos="fade-down"
                />
        </Section>
    )
}

export default HeroSection;