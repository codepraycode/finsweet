import { AdsListItems } from "@/components/AdsSection";
import FooterSection from "@/components/Footer";
import Header from "@/components/Header";
import Section from "@/components/UI/Section";
import adsSiteData from "@/data/ads.json";


const AdsPage = () => {
    return (
        <>
            <Header />

            <Section
                name="ads-hero"
                padded
                containerClassName="ads-wrapper"

            >
                <h1>
                    <span className="section-header">{adsSiteData.title}</span><br/>
                    <span className="section-h1">
                        {adsSiteData.header1}
                    </span>
                </h1>

                <p className="section-p">
                    {adsSiteData.paragraph}
                </p>
            </Section>

            <h2 className="grand-title">{adsSiteData.grandTitle}</h2>

            <p className="anchor text-center">
                <span>{adsSiteData.grandSubTitle} <br/> 👇</span>
            </p>


            <Section
                padded
                name="ads-list"
                wrapperClassName="bg-blue-accent"
            >

                <AdsListItems/>
            </Section>


            <FooterSection />

        </>
    )
};

export default AdsPage;
