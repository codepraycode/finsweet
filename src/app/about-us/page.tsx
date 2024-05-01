import Section from "@/components/UI/Section";


const AboutPage = () => {

    return (
        <Section
            wrapperClassName="bg-light-blue"
            name="about"
            padded
        >
            <div>
                <h1 className="section-h1">
                    About DonManuel Group
                </h1>

                <div className="p-div">
                    <h2 className="section-header">
                        Company Structure [RC1093505]
                    </h2>
                    DonManuel Group is a holding company with the following subsidiaries:
                    <ul>
                        <li>DonManuel Concept Ltd</li>
                        <li>DonBryan Logistics Ltd</li>
                    </ul>
                </div>

                <div className="p-div">
                    <h2 className="section-header">
                        Motto
                    </h2>
                    Service without Boundary

                </div>

                <div className="p-div">
                    <h2 className="section-header">
                        Vision
                    </h2>
                    To be the Hub in aviation  Services and the craving of the customers that will patronise us based on the feedback they have gotten from the customers we have served well and are still serving. Above all,to be the timely Solution to the problems of our Customers.
                </div>

                <div className="p-div">
                    <h2 className="section-header">
                        Mission
                    </h2>
                    To Develop  lasting client relationships by providing exceptional value in the aviation industry with Smart work,Respect and Trust.
                </div>
                <div className="p-div">
                    <h2 className="section-header">CORE VALUES</h2>
                    <ul className="p-ul">
                        <li>Trust</li>
                        <li>Sincerity</li>
                        <li>Hard/Smart Work</li>
                        <li>Integrity</li>
                        <li>Time Consciousness</li>
                        <li>Pro-solution</li>
                        <li>Results</li>
                    </ul>
                </div>



            </div>
        </Section >
    )
}





export default AboutPage;