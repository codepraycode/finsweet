import Link from "next/link"
import NewsLetter from "./NewsLetter"
import siteData from "@/data.json";
import Logo from "./UI/Logo";
import Section from "./UI/Section";
import Image from "next/image";

const { footer } = siteData;


const FooterDetails = () => {
    return (
        <div className="footer-top shape-on-edge">

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
        <>
            <footer className="container footer-bottom">
                <span className="copyright">
                    {footer.copyright}
                </span>

                <div className="contacts">
                    <div>
                        <Image alt="Address" src="/images/icons/file-write.svg" width={30} height={30} />
                        <span>
                            Behind NCAA head office , Airside, N.A.I.A ABUJA AIRPORT
                        </span>
                    </div>

                    <div>

                        <Image alt="Address" src="/images/icons/contact.svg" width={30} height={30} />
                        <span>
                            <a href="tel:+2347068886283">+2347068886283</a>&nbsp;,&nbsp;
                            <a href="tel:+2348094906968">+2348094906968</a>
                        </span>
                    </div>


                </div>
            </footer >
        </>
    )
}

export default FooterSection;