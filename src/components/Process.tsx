import Image from "next/image";
import Link from "next/link";


const ProcessSection = () => {
    return (
        <section>

            <div className="container container--padded process">

                <h2 className="section-header">Our Process</h2>
                
                <p className="half-length">
                    <span className="section-h1"> 
                        The process we are working With Our client Worldwide
                    </span>

                    <span className="section-p half-length--more">
                        Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable.
                    </span>
                </p>

                <br /><br />

                <div className="cards cards-linked">
                    <article className="card">
                        <div className="card-icon float-left">
                            <Image src={'/images/icons/bulb.svg'} alt="Discover" width={50} height={50}/>
                        </div>

                        <div className="float-right">
                            <h3>Discover</h3>
                            <p>We aim to attain the greatest satisfaction for our clients and be one of the prominent.</p>
                        </div>

                    </article>
                    <article className="card">
                        <div className="card-icon float-left">
                            <Image src={'/images/icons/file-write.svg'} alt="Designing" width={50} height={50}/>
                        </div>

                        <div className="float-right">
                            <h3>Designing</h3>
                            <p>We aim to attain the greatest satisfaction for our clients and be one of the prominent.</p>
                        </div>

                    </article>

                    <article className="card">
                        <div className="card-icon float-left">
                            <Image src={'/images/icons/code-negative.svg'} alt="Development" width={50} height={50}/>
                        </div>

                        <div className="float-right">
                            <h3>Development</h3>
                            <p>We aim to attain the greatest satisfaction for our clients and be one of the prominent.</p>
                        </div>

                    </article>
                </div>

                <br/><br/>
                <div className="cards cards-linked">
                    <article className="card">
                        <div className="card-icon float-left">
                            <Image src={'/images/icons/mind.svg'} alt="Testing" width={50} height={50}/>
                        </div>

                        <div className="float-right">

                            <h3>Testing</h3>
                            <p>We aim to attain the greatest satisfaction for our clients and be one of the prominent.</p>
                        </div>

                    </article>
                    <article className="card">
                        <div className="card-icon float-left">
                            <Image src={'/images/icons/rocket-negative.svg'} alt="Deployment" width={50} height={50}/>
                        </div>


                        <div className="float-right">
                            <h3>Deployment</h3>
                            <p>We aim to attain the greatest satisfaction for our clients and be one of the prominent.</p>
                        </div>

                    </article>

                    <article className="card">
                        <div className="card-icon float-left">
                            <Image src={'/images/icons/maintainance.svg'} alt="Maintenance" width={50} height={50}/>
                        </div>

                        <div className="float-right">
                            <h3>Maintenance</h3>
                            <p>We aim to attain the greatest satisfaction for our clients and be one of the prominent.</p>
                        </div>

                    </article>
                </div>

            </div>

        </section>
    )
}

export default ProcessSection;