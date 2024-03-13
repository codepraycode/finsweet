import Image from "next/image";
import Header from "./Header";


const HeroSection = () => {
    return (
        <section className="bg-hero">
            <Header />
            <hr/>

            <div className="hero container">
                
                <h1 className="box-cap">
                    Transform Your Idea Into Reality with Finsweet
                    
                    <span>
                        The entire Finsweet team knows what&#39;s good with Webflow and you can too with 1 week and a good attitude.
                    </span>
                    <br />

                    <button className="btn btn-with-arrow btn-shape-bg">
                        Request Quote
                    </button>
                </h1>

                <div className="hero_image" />
            </div>

            <div className="hero_client container">
                <h2>
                    <span>Our Clients</span>
                    <br />
                    We&#39;ve Worked with
                </h2>


                <ul role="list">
                    <li style={{backgroundImage:'url(/images/clients/logoipsum-4.svg)'}} />
                    <li style={{backgroundImage:'url(/images/clients/logoipsum-3.svg)'}} />
                    <li style={{backgroundImage:'url(/images/clients/logoipsum-2.svg)'}} />
                    <li style={{backgroundImage:'url(/images/clients/logoipsum-1.svg)'}} />
                    <li style={{backgroundImage:'url(/images/clients/logoipsum.svg)'}} />
                </ul>
            </div>
        </section>
    )
}

export default HeroSection;