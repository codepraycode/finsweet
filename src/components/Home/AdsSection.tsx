import siteData from '@/data/home.json';
import Button from "../UI/Button";
import Section from "../UI/Section";
import { Ads, AdsModel } from '@/lib/nobox/structures/ads.structure';


const {adsHighlight} = siteData;


export const AdsListItems = ({items}:{items: Ads[]}) => {
    return (
        <div className="ads-highlights">
            {
                items.map((item, i) => (

                    <article className="blog-card border-radius" key={i}>
                        <div
                            className="feature-img"
                            style={{backgroundImage:`url(${item.image})`}}
                        />

                        <div className="details">
                            <h1>{item.title}</h1>
                            <br/>
                            <p>{item.about}</p>
                            <br/>
                            <Button
                                label={adsHighlight.cta.label}
                                link={item.link}
                                className={adsHighlight.cta.className}
                            />
                        </div>
                    </article>
                ))
            }                

        </div>
    )
}

const AdsSection = async () => {
    const ads = await getAdsData();

    if (ads.length < 1) return null;
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

            <AdsListItems items={ads}/>

        </Section>
    )
}

export default AdsSection;


export async function getAdsData(): Promise<Ads[]> {
    const data = await AdsModel.find();

    return data || [];
}