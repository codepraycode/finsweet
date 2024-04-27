
import BookDetail from "@/components/BookDetail";
import { Book } from "@/lib/nobox/structures/book.structure";
import { headers } from "next/headers";

import bookData from "@/data/book.json";
import Section from "@/components/UI/Section";


const BookPage = ({ params }: { params: { slug: string } }) => {

    // console.log("Params", params);
    const headerList = headers();
    let baseUrl = headerList.get("referer");

    if (baseUrl) {
        baseUrl = baseUrl.slice(0, baseUrl.length - 1)
    }


    return (
        <Section
            name="book-page bg-primary"
        >
            <BookDetail item={bookData} baseUrl={baseUrl as string}/>
        </Section>
    )
}

export default BookPage;
 
