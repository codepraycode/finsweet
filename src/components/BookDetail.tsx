'use client'
import { slugify } from "@/utils";
import { useParams } from "next/navigation";
import books from "@/data/books.json";
import Section from "./UI/Section";


const BookDetail = () => {
    const {slug} = useParams();

    const book = books.bookItems.find((e)=>slugify(e.title) === slug);

    console.log(book);

    if (!book) return (
        <Section
            name="no-book"

            padded
        >
            <h1>Book not found</h1>
        </Section>
    )


    return (

        
        <h1>
            Book Detail
        </h1>
    )
}


export default BookDetail;
