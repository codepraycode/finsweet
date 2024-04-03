import Image from "next/image";
import siteData from '@/data/home.json';
import Button from "./UI/Button";
import Section from "./UI/Section";

const {services} = siteData;

const OldServicesSection = () => {
    return (
        <>
            <Section
                wrapperClassName="bg-orange"
                name="services"
                padded
            >

                <h2 className="section-header">
                    {services.title}
                </h2>
                
                {/* <p className="section-h1 half-length">
                    {services.main}
                </p>

                <Button
                    className={services.cta.className}
                    label={services.cta.label}
                    link={services.cta.link}
                /> */}

                <div className="cards">
                    {
                        services.deliverables.map((item, i) => (
                            <article className="card" key={i}>
                                <div className="card-icon">
                                    <Image
                                        src={item.icon.url}
                                        alt={item.icon.alt}
                                        width={item.icon.width}
                                        height={item.icon.height}
                                    />
                                </div>

                                <h3>{ item.title }</h3>
                                <p>
                                    {item.description}
                                </p>

                                <br/>

                                <Button
                                    link={item.cta.link}
                                    label={item.cta.label}
                                    className={item.cta.className}
                                />
                            </article>
                        ))
                    }
                </div>

            </Section>
            
            <Section
                wrapperClassName="bg-orange"
                name="services"
                padded
            >

                <h2 className="section-header">
                    {services.title}
                </h2>
                
                {/* <p className="section-h1 half-length">
                    {services.main}
                </p>

                <Button
                    className={services.cta.className}
                    label={services.cta.label}
                    link={services.cta.link}
                /> */}

                <div className="cards">
                    {
                        services.deliverables.map((item, i) => (
                            <article className="card" key={i}>
                                <div className="card-icon">
                                    <Image
                                        src={item.icon.url}
                                        alt={item.icon.alt}
                                        width={item.icon.width}
                                        height={item.icon.height}
                                    />
                                </div>

                                <h3>{ item.title }</h3>
                                <p>
                                    {item.description}
                                </p>

                                <br/>

                                <Button
                                    link={item.cta.link}
                                    label={item.cta.label}
                                    className={item.cta.className}
                                />
                            </article>
                        ))
                    }
                </div>

            </Section>
        </>
    )
}



const ServicesSection = () => {
    return (
        <>
            <Section
                wrapperClassName="bg-orange"
                name="services"
                padded
            >

                <h2 className="section-header">
                    {services.title}
                </h2>


                <div className="sub">

                    <div>
                        <h2 className="section-h2">Donmanuel 1</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti nisi pariatur cum facilis ducimus cumque nemo nam, incidunt delectus magni enim commodi eos et soluta quasi quia velit. Illo, id.
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima a enim libero quasi quod blanditiis in ullam dolorem et, fugiat obcaecati magni qui possimus aut! Ut nesciunt quos voluptatem minima.
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique eveniet deleniti quasi quam, illo ipsa aliquam repellendus ut tempore suscipit. Beatae, repellendus dicta! Eaque iusto ratione repudiandae illo. Libero, facere.
                        </p>
                    </div>


                    <div  className="sub-logo" style={{backgroundImage:"url('/images/airplane.png')"}}/>
                </div>


                
                <div className="sub">

                    <div>
                        <h2 className="section-h2">Donmanuel 1</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti nisi pariatur cum facilis ducimus cumque nemo nam, incidunt delectus magni enim commodi eos et soluta quasi quia velit. Illo, id.
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima a enim libero quasi quod blanditiis in ullam dolorem et, fugiat obcaecati magni qui possimus aut! Ut nesciunt quos voluptatem minima.
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique eveniet deleniti quasi quam, illo ipsa aliquam repellendus ut tempore suscipit. Beatae, repellendus dicta! Eaque iusto ratione repudiandae illo. Libero, facere.
                        </p>
                    </div>


                    <div  className="sub-logo" style={{backgroundImage:"url('/images/airplane.png')"}}/>
                </div>

            </Section>
        </>
    )
}

export default ServicesSection;