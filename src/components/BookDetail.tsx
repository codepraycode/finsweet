'use client'

import Section from "./UI/Section";
import DownloadBook from "./DownloadBook";
import { Book } from "@/lib/nobox/structures/book.structure";
import { usePathname } from "next/navigation";


interface BookDetailProps {
    item: Book | null,
    baseUrl: string,
}

const BookDetail = ({item: book, baseUrl}: BookDetailProps) => {
    // const {slug} = useParams();

    // const book = books.bookItems.find((e)=>slugify(e.title) === slug);

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
                containerImage={book.image.banner}
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
                            <span className="price">
                                        ₦ {new Intl.NumberFormat().format(book.price)}
                                    </span>
                            {/* <span className="rating star">{book.rating.rate} ({book.rating.total} rating{book.rating.total > 1 && 's'})</span> */}
                            <span className="rating">{book.date_released}</span>
                        </p>

                        <div className="attribution">
                            <span className="author-img" style={{backgroundImage:`url(${book.author.image})`}}/>
                            <p>
                                <b>{book.author.name}</b>
                                <br/>
                                <span>{book.author.about}</span>
                            </p>
                        </div>
                    </div>


                    <DownloadBook
                        className="buy-btn"
                        label="Buy Book"
                        price={book.price}
                        title={book.title}
                        baseUrl={baseUrl}
                    />
                </div>


                <br/><br/>

                <p className="book-description">
                    {/* <span>{book.summary}</span> */}

                    {
                        book.summary.map((e, i)=>(
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
