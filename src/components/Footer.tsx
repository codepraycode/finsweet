import Link from "next/link"
import NewsLetter from "./NewsLetter"
import siteData from "@/data/common.json";
import Logo from "./UI/Logo";
import Section from "./UI/Section";

const {footer} = siteData;


const FooterDetails = () => {
    return (
        <div className="footer-top shape-on-edge">

            <div>
                <h1 className="section-h1">
                    {footer.main}
                </h1>

                
                <p className="section-h3 d-block">
                    {footer.subTitle}:
                    <br/>
                    {footer.subsidiaries.join(", ")}
                </p>


                <p className="p d-block">
                    Registration Number: {footer.registrationNo}
                    <br/>
                    Moto: {footer.motto}
                </p>

                <hr />
                <p className="address">
                    {footer.address}
                </p>
            </div>


            {/* <nav>
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
            </nav> */}


            <div className="info">

                <p className="copyright">
                    {footer.copyright}
                </p>
                <br/>
                <p className="copyright">
                    Contacts: {footer.contacts.phone.join(", ")}
                </p>
                <br/>
                <p className="copyright">
                    Email: {footer.contacts.email}
                </p>
                <br/>
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
    )
}

const FooterSection = () => {
    return (
        <>
            <Section 
                padded
                name="footer"
            >

                {/* <NewsLetter />
                <br/><br/><br/><br/> */}
                
                <FooterDetails />
            </Section>
        </>
    )
}

export default FooterSection;