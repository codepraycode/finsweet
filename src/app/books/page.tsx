import FooterSection from "@/components/Footer";
import Header from "@/components/Header";
import Section from "@/components/UI/Section";
import bookPage from "@/data/book.json";
import { Book, BookModel } from "@/nobox/structures/book.structure";
// import { slugify } from "@/utils";
import Link from "next/link";


function slugify(text: string): string {
    // Convert text to lowercase
    text = text.toLowerCase();
    // Remove non-word characters (excluding hyphens and spaces)
    text = text.replace(/[^\w\s-]/g, '');
    // Replace whitespace characters with hyphens
    text = text.replace(/\s+/g, '-');
    // Replace multiple consecutive hyphens with a single hyphen
    text = text.replace(/-+/g, '-');
    return text;
}


const BookListItems = ({items}:{items: Book[]}) => {
    return (
        <div className="books-highlights">
            {
                items.length < 1 ? <h3 className="text-center text-gray w-full">Not available for now</h3>: items.map((item, i) => {

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

    console.log(books)

    return (
        <>
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
        </>
    )
};

export default BooksPage;


const getData = async (): Promise<Book[]> => {
    // Fetch data from external API
    const books = await BookModel.find();
    // Pass data to the page via props

    // console.log(books[0])
    return books || [];
}