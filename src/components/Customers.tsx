import Image from "next/image";
import siteData from "@/data.json";
import Section from "./UI/Section";

const { customers } = siteData;

const CustomerSection = () => {
    return (
        <Section
            wrapperClassName="bg-light-blue"
            padded
            name="customers"
        >

            <div className="half-length">

                <h1 className="section-h1 box-cap box-cap--blue">
                    {customers.main}
                </h1>
                <p className="section-h3">
                    {customers.subTitle}
                </p>
                <p className="section-p">
                    {customers.paragraph}
                </p>
                <div className="customers-highlight">
                    {
                        customers.highlights.customers.map((item, i) => (
                            <span className="customer-img" key={i}>
                                <Image
                                    src={item.avatar.url}
                                    alt={item.avatar.alt}
                                    width={item.avatar.width}
                                    height={item.avatar.height}
                                />
                            </span>
                        ))
                    }

                    <b className="label">
                        { customers.highlights.label }
                    </b>
                </div>
            </div>


            <div className="card customer-reviews">
                {
                    customers.reviews.map((item, i) => {
                        
                        
                        
                        if (!item.review) return;
                        return (

                        <div key={i} className="review-item">

                            <p className="section-h4">
                                {item.review}
                            </p>

                            <div className="attribution">
                                <span className="customer-img">
                                    <Image
                                        src={item.avatar.url}
                                        alt={item.avatar.alt}
                                        width={item.avatar.width}
                                        height={item.avatar.height}
                                    />
                                </span>

                                <p>
                                    <b>{item.fullname}</b>
                                    <span>{item.company.position}</span>
                                </p>

                                <span
                                    className="customer-logo"
                                    style={{backgroundImage: `url(${item.company.logo})`}}
                                />
                            </div>
                        </div>
                    )})
                }


                <div className="slide-controllers">
                    {
                        [...Array(customers.reviews.length)].map((each, i) => (
                            <button data-active={i === 0} key={i}/>
                        ))
                    }
                </div>
            </div>

        </Section>
    )
}

export default CustomerSection;