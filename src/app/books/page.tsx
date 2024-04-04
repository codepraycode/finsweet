import FooterSection from "@/components/Footer";
import Header from "@/components/Header";
import Section from "@/components/UI/Section";
import books from "@/data/books.json";
import { slugify } from "@/utils";
import Image from "next/image";
import Link from "next/link";



const BookListItems = () => {
    return (
        <div className="books-highlights">
            {
                books.bookItems.map((item, i) => {

                    const author = books.authors.find((e)=>e.id === item.authorId);

                    if (!author) return null;
                    
                    return (

                    <article className="book-highlight" key={i}>

                        <Link href={`/books/${slugify(item.title)}`}>
                            <div
                                className="feature-img"
                                style={{backgroundImage:`url(${item.images.thumbmail.url})`}}
                            />

                            <div className="details">
                                <h1>{item.title}</h1>

                                <p className="book-meta">
                                    <span className="price">{item.price}</span>
                                    <span className="rating star">{item.rating.rate}({item.rating.total})</span>
                                </p>

                                <div className="attribution">
                                    <span className="author-img" style={{backgroundImage:`url(${author.image.url})`}}/>
                                    <p>
                                        <b>{author.name}</b>
                                        <span>{author.date}</span>
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </article>
                )})
            }                

        </div>
    )
}

const BooksPage = () => {
    return (
        <>
            <Header />

            <Section
                name="books-hero"
                padded
                containerClassName="books-wrapper"

            >
                <h1 className="box-cap box-cap--orange">
                    <span className="section-header">{books.title}</span><br/>
                    <span className="section-h1">
                        {books.header1}
                    </span>
                </h1>

                <p className="section-p">
                    {books.paragraph}
                </p>                
            </Section>


            <Section
                padded
                name="ads-list"
                wrapperClassName="bg-gray"
            >

                <BookListItems />
            </Section>


            <FooterSection />
        </>
    )
};

export default BooksPage;
