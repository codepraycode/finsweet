import Image from "next/image";
import Link from "next/link";


const BlogSection = () => {
    return (
        <section className="bg-blue-accent">

            <div className="container container--padded blogs">

                <h1 className="section-h1 box-cap box-cap--blue">Read our latest blogs & news</h1>
                <br/><br/>
                <div className="blog-highlights">

                    <article className="blog-card">
                        <div
                            className="feature-img"
                            style={{backgroundImage:'url(/images/blog/feature-image-1.png)'}}
                        />

                        <div className="details">
                            <span>Jan 19, 2021</span>

                            <h1>Today&#39;s best design trends for digital products</h1>
                            <br/>
                            <Link href={"/about-us"} className="btn btn-transparent btn-with-arrow arrow-dark nav-cta">
                                Read more
                            </Link>
                        </div>
                    </article>

                    <article className="blog-card">
                        <div
                            className="feature-img"
                            style={{backgroundImage:'url(/images/blog/feature-image-2.png)'}}
                        />

                        <div className="details">
                            <span className="">Jan 19, 2021</span>
                            <h1>A practical guide to building a brand strategy</h1>
                            <br/>
                            <Link href={"/about-us"} className="btn btn-transparent btn-with-arrow arrow-dark nav-cta">
                                Read more
                            </Link>
                        </div>
                    </article>
                    
                </div>


            </div>

        </section>
    )
}

export default BlogSection;