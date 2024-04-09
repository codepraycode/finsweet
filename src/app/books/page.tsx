import FooterSection from "@/components/Footer";
import Header from "@/components/Header";
import Section from "@/components/UI/Section";
import bookPage from "@/data/books.json";
import { Book, BookModel } from "@/lib/nobox/structures/book.structure";
import { slugify } from "@/utils";
import Link from "next/link";



const BookListItems = ({items}:{items: Book[]}) => {
    return (
        <div className="books-highlights">
            {
                items.length < 1 ? <h3 className="text-center text-gray w-full">No Book available for now</h3>: items.map((item, i) => {

                    const author = item.author;

                    if (!author) return null;
                    
                    return (

                    <article className="book-highlight" key={i}>

                        <Link href={`/books/${slugify(item.title)}`}>
                            <div
                                className="feature-img"
                                style={{backgroundImage:`url(${item.image.thumbmail})`}}
                            />

                            <div className="details">
                                <h1>{item.title}</h1>

                                <p className="book-meta">
                                    <span className="price">{item.price}</span>
                                    {/* <span className="rating star">{item.rating.rate}({item.rating.total})</span> */}
                                    <span className="rating star">{item.date_released}</span>
                                </p>

                                <div className="attribution">
                                    <span className="author-img" style={{backgroundImage:`url(${author.image})`}}/>
                                    <p>
                                        <b>{author.name}</b>
                                        <span>{author.about}</span>
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

const BooksPage = async () => {
    const books = await getData();

    return (
        <>
            <Header />

            <Section
                name="books-hero"
                padded
                containerClassName="books-wrapper"

            >
                <h1 className="box-cap box-cap--orange">
                    <span className="section-header">{bookPage.title}</span><br/>
                    <span className="section-h1">
                        {bookPage.header1}
                    </span>
                </h1>

                <p className="section-p">
                    {bookPage.paragraph}
                </p>                
            </Section>


            <Section
                padded
                name="ads-list"
                wrapperClassName="bg-gray"
            >

                <BookListItems items={books}/>
            </Section>


            <FooterSection />
        </>
    )
};

export default BooksPage;


const getData = async (): Promise<Book[]> => {
    // Fetch data from external API
    const books = await BookModel.find();
    // Pass data to the page via props
    return books;
}
