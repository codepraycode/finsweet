import Link from "next/link";
import siteData from "@/data.json";
import Button from "./UI/Button";
import Section from "./UI/Section";


const {blogHighlight} = siteData;


const BlogSection = () => {
    return (
        <Section
            wrapperClassName="bg-blue-accent"
            padded
            name="blogs"
        >
            <h1 className="section-h1 box-cap box-cap--blue">
                {blogHighlight.main}
            </h1>
            <br/><br/>
            <div className="blog-highlights">

                {
                    blogHighlight.highlights.map((item, i) => (

                        <article className="blog-card" key={i}>
                            <div
                                className="feature-img"
                                style={{backgroundImage:`url(${item.image.url})`}}
                            />

                            <div className="details">
                                <span>{item.date}</span>

                                <h1>{item.title}</h1>
                                <br/>
                                <Button
                                    label={item.cta.label}
                                    link={item.cta.link}
                                    className={item.cta.className}
                                />
                            </div>
                        </article>
                    ))
                }                

            </div>

        </Section>
    )
}

export default BlogSection;