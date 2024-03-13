import Image from "next/image";
import Link from "next/link";


const AboutSection = () => {
    return (
        <section className="container container--padded about_us">
            <h2>ABOUT US</h2>
            
            <div className="_top">
                <p>
                    The company leads entire webdesign process from concept to delivery.
                </p>
                <p>
                    The Era Of Technology. <br />
                    <span>Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded.</span>
                </p>
            </div>


            <div className="img_lineup">
                <div className="img_wrapper">
                    {/* <Image src={"/images/about-us/img-1.png"} alt="Image 1" width={403} height={450}/> */}
                </div>
                <div className="img_wrapper">
                    {/* <Image src={"/images/about-us/img-2.png"} alt="Image 2" width={403} height={450}/> */}
                </div>
                <div className="img_wrapper">
                    {/* <Image src={"/images/about-us/img-3.png"} alt="Image 3" width={403} height={450}/> */}
                </div>
            </div>

            <div className="info-cta">
                <div>
                    <div>
                        <span>1560+</span> 
                        <br />
                        {/* Border design */}
                        <span>Project Delivered</span>
                    </div>
                    <div>
                        <span>100+</span> 
                        <br />
                        {/* Border design */}
                        <span>Professional</span>
                    </div>
                    <div>
                        <span>950+</span> 
                        <br />
                        {/* Border design */}
                        <span>Happy Client</span>
                    </div>
                    <div>
                        <span>10 yrs</span> 
                        <br />
                        {/* Border design */}
                        <span>Experience</span>
                    </div>
                </div>

                <Link href={"/about-us"} className="btn btn-transparent btn-with-arrow arrow-dark">
                    Read about us
                </Link>
            </div>
        </section>
    )
}

export default AboutSection;