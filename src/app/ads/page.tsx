import { AdsListItems } from "@/components/AdsSection";
import FooterSection from "@/components/Footer";
import Header from "@/components/Header";
import Section from "@/components/UI/Section";

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
                    <span className="section-header">Our Other services</span><br/>
                    <span className="section-h1">
                        Discover Your Next Treasure: Browse Our Ads Listings Today!
                    </span>
                </h1>

                <p className="section-p">
                    Welcome to our vibrant marketplace, where opportunities abound and treasures await discovery! Whether you&#39;re hunting for that perfect item, seeking to sell your goods, or simply exploring what&#39;s out there, you&#39;ve come to the right place. Dive into our extensive collection of ads listings and uncover a world of possibilities. From electronics to fashion, real estate to services, our platform connects buyers and sellers, making transactions seamless and exciting. Join our community today and embark on your journey to find or showcase that special something.
                </p>
            </Section>

            <h2 className="grand-title">Our Other Services</h2>

            <p className="anchor text-center">
                <a>Services you may be intersted in <br/> 👇</a>
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
