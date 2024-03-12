import Image from "next/image";
import Header from "./Header";


const HeroSection = () => {
    return (
        <section className="bg-hero">
            <Header />
            <hr/>

            <div className="hero container">
                
                <h1>
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
        </section>
    )
}

export default HeroSection;