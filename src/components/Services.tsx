import Image from "next/image";
import Link from "next/link";


const ServicesSection = () => {
    return (
        <section className="bg-orange">

            <div className="container container--padded services">

                <h2 className="section-header">Our Services</h2>
                
                <p className="section-h1 half-length">We build software solutions that solve client&#39;s business challenges</p>

                <button className="btn btn-with-arrow btn-shape-bg">
                    Start a project
                </button>

                <div className="cards">
                    <article className="card">
                        <div className="card-icon">
                            <Image src={'/images/icons/contact.svg'} alt="Technical support" width={50} height={50}/>
                        </div>

                        <h3>Technical support</h3>
                        <p>We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-class service</p>

                        <br/>
                        <Link href={"/about-us"} className="btn btn-transparent btn-with-arrow arrow-dark nav-cta">
                            Read more
                        </Link>
                    </article>
                    <article className="card">
                        <div className="card-icon">
                            <Image src={'/images/icons/cog.svg'} alt="Testing Management" width={50} height={50}/>
                        </div>

                        <h3>Testing Management</h3>
                        <p>We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-class service</p>

                        <br/>
                        <Link href={"/about-us"} className="btn btn-transparent btn-with-arrow arrow-dark nav-cta">
                            Read more
                        </Link>
                    </article>

                    <article className="card">
                        <div className="card-icon">
                            <Image src={'/images/icons/code.svg'} alt="Development" width={50} height={50}/>
                        </div>

                        <h3>Development</h3>
                        <p>We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-class service</p>

                        <br/>
                        <Link href={"/about-us"} className="btn btn-transparent btn-with-arrow arrow-dark nav-cta">
                            Read more
                        </Link>
                    </article>
                </div>

            </div>

        </section>
    )
}

export default ServicesSection;