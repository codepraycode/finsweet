import Link from "next/link"


const NewsLetter = () => {
    return (
        <div className="container container--padded newsletter">
            <h1 >
                <span className="section-header">NEWSLETTER</span>
                
                <span className="section-h1">Subscribe our News Letter to get Latest Updates.</span>
            </h1>

            <div className="newsletter-input">
                <input type="text" placeholder="Paresh@Pixeto.com"/>
            </div>
        </div>
    )
}

const FooterDetails = () => {
    return (
        <div className="container footer-top shape-on-edge">

            <div>
                <h1 className="section-h1">
                    Let&#39;s make something special
                </h1>

                <p className="section-h3 d-block">
                    Let&#39;s talk! 🤙
                </p>


                <p className="contact">
                    <span className="d-block">020 7993 2905</span>
                    <span className="d-block">hi@finsweet.com</span>
                </p>
                <hr />
                <p className="address">
                    DLF Cybercity, Bhubaneswar,<br /> India, &52050
                </p>
            </div>


            <nav>
                <ul>
                    <li>
                        <Link href="/" className='active'>Home</Link>
                    </li>
                    <li>
                        <Link href="/services">Service</Link>
                    </li>
                    <li>
                        <Link href="/company">Company</Link>
                    </li>
                    <li>
                        <Link href="/career">Career</Link>
                    </li>
                    <li>
                        <Link href="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link href="/contact-us">Contact Us</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link href="/" className='active'>Home</Link>
                    </li>
                    <li>
                        <Link href="/services">Service</Link>
                    </li>
                    <li>
                        <Link href="/company">Company</Link>
                    </li>
                    <li>
                        <Link href="/career">Career</Link>
                    </li>
                    <li>
                        <Link href="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link href="/contact-us">Contact Us</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link href="/" className='active'>Home</Link>
                    </li>
                    <li>
                        <Link href="/services">Service</Link>
                    </li>
                    <li>
                        <Link href="/company">Company</Link>
                    </li>
                    <li>
                        <Link href="/career">Career</Link>
                    </li>
                    <li>
                        <Link href="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link href="/contact-us">Contact Us</Link>
                    </li>
                </ul>
            </nav>
            
        </div>
    )
}

const FooterSection = () => {
    return (
        <section>

            <NewsLetter />
            <br/><br/><br/><br/>
            
            
            <footer>
                {/* <h1>Footer us Section</h1> */}

                <FooterDetails />

                <div className="bg-orange">

                    <div className="container footer-bottom">
                        <div className="logo logo--negative" />

                        <span className="copyright">
                            ©2021 Finsweet
                        </span>


                        <ul role="list" className="socials">
                            <li>
                                <Link href={"/"} style={{backgroundImage:'url(/images/icons/socials/facebook-negative.svg)'}}>
                                    facebook
                                </Link>
                            </li>
                            <li>
                                <Link href={"/"} style={{backgroundImage:'url(/images/icons/socials/twitter-negative.svg)'}}>
                                    twitter
                                </Link>
                            </li>
                            <li>
                                <Link href={"/"} style={{backgroundImage:'url(/images/icons/socials/instagram-negative.svg)'}}>
                                    instagram
                                </Link>
                            </li>
                            <li>
                                <Link href={"/"} style={{backgroundImage:'url(/images/icons/socials/linkedin-negative.svg)'}}>
                                    linkedin
                                </Link>
                            </li>
                        </ul>

                    </div>
                
                </div>
            </footer>

        </section>
    )
}

export default FooterSection;