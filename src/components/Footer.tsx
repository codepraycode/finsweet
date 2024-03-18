import Link from "next/link"
import NewsLetter from "./NewsLetter"
import siteData from "@/data.json";
import Logo from "./UI/Logo";

const {footer} = siteData;


const FooterDetails = () => {
    return (
        <div className="container footer-top shape-on-edge">

            <div>
                <h1 className="section-h1">
                    {footer.main}
                </h1>

                <p className="section-h3 d-block">
                    {footer.subTitle}
                </p>


                <p className="contact">
                    {
                        footer.contacts.map((item, i) => (
                            <span
                                key={i}
                                className="d-block"
                            >
                                {item}
                            </span>
                        ))
                    }
                </p>
                <hr />
                <p className="address">
                    {footer.address}
                </p>
            </div>


            <nav>
                {
                    footer.links.map((links, i) => (
                        <ul key={i}>
                            {
                                links.map((item, i) => (
                                    <li key={i}>
                                        <Link
                                            href={item.url}
                                            className={`${item.active} ? 'active':''`}
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    ))
                }
            </nav>
            
        </div>
    )
}

const FooterSection = () => {
    return (
        <section >

            <NewsLetter />
            <br/><br/><br/><br/>
            
            
            <footer>
                {/* <h1>Footer us Section</h1> */}

                <FooterDetails />

                <div className="bg-orange">

                    <div className="container footer-bottom">

                        <Logo negative/>

                        <span className="copyright">
                            {footer.copyright}
                        </span>


                        <ul role="list" className="socials">
                            {
                                footer.socials.map((item, i)=>(
                                    <li key={i}>
                                        <Link
                                            href={"/"}
                                            style={{
                                                backgroundImage:`url(${item.icon.url})`
                                            }}
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>

                    </div>
                
                </div>
            </footer>

        </section>
    )
}

export default FooterSection;