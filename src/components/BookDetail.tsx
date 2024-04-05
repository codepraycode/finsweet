'use client'
import { slugify } from "@/utils";
import { useParams } from "next/navigation";
import books from "@/data/books.json";
import Section from "./UI/Section";
import Button from "./UI/Button";


const BookDetail = () => {
    const {slug} = useParams();

    const book = books.bookItems.find((e)=>slugify(e.title) === slug);

    if (!book) return (
        <Section
            name="no-book"

            padded
        >
            <h1>Book not found</h1>
        </Section>
    )


    return (

        <>
            <Section
                name="book-banner"
                padded
                containerClassName="image-container"
                containerImage={book.images.banner.url}
            >
                <></>
            </Section>


            <Section
                padded
                name="book-info"
                containerClassName="book-info-wrapper"
            >
                <h1 className="section-h1">
                    {book.title}
                </h1>


                <div className="book-meta-header">

                    <div>
                        <p className="book-meta">
                            <span className="price">{book.price}</span>
                            {/* <span className="rating star">{book.rating.rate} ({book.rating.total} rating{book.rating.total > 1 && 's'})</span> */}
                            <span className="rating">{book.date}</span>
                        </p>

                        <div className="attribution">
                            <span className="author-img" style={{backgroundImage:`url(${book.author.image.url})`}}/>
                            <p>
                                <b>{book.author.name}</b>
                                <br/>
                                <span>{book.author.about}</span>
                            </p>
                        </div>
                    </div>


                    <Button
                        className="add-to-cart"
                        label="Add to Cart"
                    />
                </div>


                <br/><br/>

                <p className="book-description">
                    <span>{book.synopsis.summary}</span>

                    {
                        book.synopsis.details.highlights.map((e, i)=>(
                            <span key={i}>
                                {e}
                            </span>
                        ))
                    }
                </p>

            </Section>
        </>
    )
}


export default BookDetail;
