import Image from "next/image";


const ExpertiseSection = () => {
    return (
        <section className="bg-blue-accent">

            <div className="container container--padded expertise">

                <div>

                    <h2 className="section-header">Our expertise</h2>
                    <p>
                        <span className="section-h1">We want to get local identification in every corner of the world in this era of global citizenship</span>

                        <div className="section-p">
                            Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded.
                        </div>
                    </p>
                </div>

                <div className="cards">
                    <article className="card card-margin-bottom">
                        <div className="card-icon float-left">
                            <Image src={'/images/icons/rocket.svg'} alt="On Time Delivery" width={50} height={50}/>
                        </div>

                        <div className="float-right">
                            <h3>On Time Delivery</h3>
                            <p>Through True Rich Attended does no end it his mother since real had half every him.</p>
                        </div>


                    </article>
                    <article className="card">
                        <div className="card-icon float-left">
                            <Image src={'/images/icons/cog.svg'} alt="Best Quality" width={50} height={50}/>
                        </div>

                        <div className="float-right">
                            <h3>Best Quality</h3>
                            <p>Through True Rich Attended does no end it his mother since real had half every him.</p>
                        </div>


                    </article>

                    <article className="card card-margin-top">
                        <div className="card-icon float-left">
                            <Image src={'/images/icons/support.svg'} alt="Support Assist" width={50} height={50}/>
                        </div>

                        <div className="float-right">
                            <h3>Support Assist</h3>
                            <p>Through True Rich Attended does no end it his mother since real had half every him.</p>
                        </div>


                    </article>
                </div>

            </div>

        </section>
    )
}

export default ExpertiseSection;