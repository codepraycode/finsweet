import Header from "./Header";
import data from '@/data.json';
import Button from "./UI/Button";


const {hero, clients} = data;


const HeroSection = () => {
    return (
        <section className="bg-hero">
            <Header />
            <hr/>

            <div className="hero container">
                
                <h1 className="box-cap">
                    {hero.mainText}
                    
                    <span>
                        {hero.subText}
                    </span>
                    <br />


                    <Button
                        label={hero.cta.label}
                        isLink={!hero.cta.button}
                    />
                </h1>

                <div
                    className="hero_image"
                    style={{backgroundImage: `url(${hero.image})`}}
                />
            </div>

            <div className="hero_client container">
                <h2>
                    <span>{clients.mainTitle}</span>
                    <br />
                    {clients.subTitle}
                </h2>


                <ul role="list">
                    {
                        clients.logos.map((link, i) => (
                            
                            <li 
                                key={i} 
                                style={{backgroundImage:`url(${link})`}}
                            />
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}

export default HeroSection;