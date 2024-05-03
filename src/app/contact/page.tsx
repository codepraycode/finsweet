import ContactUs from "@/components/Contact";
import Section from "@/components/UI/Section";


const AboutPage = () => {

    return (
        <Section
            wrapperClassName="bg-light-blue"
            name="contact-us"
            padded
            containerClassName="contact-us-wrapper"
            // extended
        >
            <div>
                <h1 className="section-h1">
                    Contact Us
                </h1>

                <div className="p-div">
                    <h2 className="section-header">
                        Company Structure [RC1093505]
                    </h2>
                    Thank you for your interest in reaching out to us. We value your feedback, inquiries, and suggestions. Please feel free to contact us using the information provided below. We strive to respond to all inquiries promptly.
                    {/* <br/>
                    <br/>
                    <ul className="listly">
                        <li>Email: contact@yourcompany.com</li>
                        <li>Phone: +1 (555) 123-4567</li>
                    </ul> */}

                </div>

                <div className="p-div">
                    <h2 className="section-header">
                        General Inquiries:
                    </h2>
                    For general inquiries, questions about our book or services, or any other non-urgent matters, please contact us via email or phone:

                    <ul className="listly">
                        <li>Email: support@donmanuel.com</li>
                        <li>Phone: +2347068886283, +2348094906968</li>
                    </ul>
                </div>

                {/* <div className="p-div">
                    <h2 className="section-header">
                        Customer Support:
                    </h2>
                    Our dedicated customer support team is here to assist you with any issues or concerns you may have. For assistance, please contact:
                    <br/>
                    <br/>
                </div> */}

                <div className="p-div">
                    <h2 className="section-header">
                        Address
                    </h2>

                    <address>
                        Donmanuel Group <br/>
                        Behind NCAA head office , Airside, N.A.I.A ABUJA AIRPORT<br/>
                        Abuja <br/>
                        Nigeria
                    </address>


                </div>
                {/* <div className="p-div">
                    <h2 className="section-header">Social Media:</h2>
                    <ul className="p-ul listly">
                        <li>Facebook:</li>
                        <li>Twitter:</li>
                        <li>Instgram:</li>
                        <li>LinkedIn</li>
                    </ul>
                </div> */}



            </div>


            <ContactUs />
        </Section >
    )
}





export default AboutPage;