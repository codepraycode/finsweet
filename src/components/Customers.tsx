import Image from "next/image";


const CustomerSection = () => {
    return (
        <section className="bg-light-blue">

            <div className="container container--padded customers">

                <div className="half-length">

                    <h1 className="section-h1">Our customers love what we do</h1>
                    <p className="section-h3">Transform your idea into reality with finsweet</p>
                    <p className="section-p">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.                       
                    </p>
                    <div className="customers-highlight">
                        <span className="customer-img">
                            <Image src={"/images/customers/customer-1.png"} alt="Customer 1" width={40} height={50}/>
                        </span>
                        <span className="customer-img">
                            <Image src={"/images/customers/customer-2.png"} alt="Customer 2" width={40} height={50}/>
                        </span>
                        <span className="customer-img">
                            <Image src={"/images/customers/customer-3.png"} alt="Customer 3" width={40} height={50}/>
                        </span>

                        <b className="label">30+ Customer Reviews</b>
                    </div>
                </div>


                <div className="card customer-reviews">
                    <p className="section-h4">Finsweet has been a wonderful partner to work with. I have been a customer now for the past few months now and I have had nothing but positive experiences!</p>

                    <div className="attribution">
                        <span className="customer-img">
                            <Image src={"/images/customers/customer-1.png"} alt="Customer 3" width={40} height={50}/>
                        </span>

                        <p>
                            <b>Johnny Andro</b>
                            <span>Director, Company</span>
                        </p>

                        <span
                            className="customer-logo"
                            style={{backgroundImage: 'url(/images/clients/logoipsum-3-alt.svg)'}}
                        />
                    </div>

                    <div className="slide-controllers">
                        <button data-active="true"/>
                        <button />
                        <button />
                    </div>
                </div>


            </div>

        </section>
    )
}

export default CustomerSection;