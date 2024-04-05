import siteData from '@/data/home.json';
import Button from "./UI/Button";
import Section from "./UI/Section";


const {adsHighlight} = siteData;


export const AdsListItems = () => {
    return (
        <div className="ads-highlights">
            {
                adsHighlight.highlights.map((item, i) => (

                    <article className="blog-card border-radius" key={i}>
                        <div
                            className="feature-img"
                            style={{backgroundImage:`url(${item.image.url})`}}
                        />

                        <div className="details">
                            <h1>{item.title}</h1>
                            <br/>
                            <p>{item.description}</p>
                            <br/>
                            <Button
                                label={item.cta.label}
                                link={item.cta.link}
                                className={item.cta.className}
                            />
                        </div>
                    </article>
                ))
            }                

        </div>
    )
}

const AdsSection = () => {
    return (
        <Section
            wrapperClassName="bg-blue-accent"
            padded
            name="ads"
        >
            <h1 className="section-h1 box-cap box-cap--blue">
                {adsHighlight.main}
            </h1>
            <br/><br/>

            <AdsListItems />

        </Section>
    )
}

export default AdsSection;