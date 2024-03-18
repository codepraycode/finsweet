import Header from "./Header";
import data from '@/data.json';
import Button from "./UI/Button";
import Section from "./UI/Section";


const {hero, clients} = data;


const HeroSection = () => {
    return (
        <>
            <Header />

            {/* <hr/> */}

            <Section
                wrapperClassName="bg-hero"
                name="hero"

            >

                    <h1 className="box-cap">
                        {hero.mainText}
                        
                        <span>
                            {hero.subText}
                        </span>
                        <br />


                        <Button
                            label={hero.cta.label}
                            link={hero.cta.link}
                            className={hero.cta.className}
                        />
                    </h1>

                    <div
                        className="hero_image"
                        style={{backgroundImage: `url(${hero.image.url})`}}
                    />
            </Section>

            <Section
                wrapperClassName="bg-hero"
                name="hero_client"

            >
                <h2>
                    <span>{clients.mainTitle}</span>
                    <br />
                    {clients.subTitle}
                </h2>


                <ul role="list">
                    {
                        clients.logos.map((imageItem, i) => (
                            
                            <li 
                                key={i} 
                                style={{backgroundImage:`url(${imageItem.url})`}}
                            />
                        ))
                    }
                </ul>
            </Section>
        </>
    )
}

export default HeroSection;