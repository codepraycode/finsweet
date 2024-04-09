
import BookDetail from "@/components/BookDetail";
import FooterSection from "@/components/Footer";
import Header from "@/components/Header";
import { Book, BookModel } from "@/lib/nobox/structures/book.structure";
import { slugify } from "@/utils";

const BookItemPage = async ({ params }: { params: { slug: string } }) => {

    // console.log("Params", params);

    const {slug} = params;

    const book = await getData(slug);


    return (
        <>
            <Header />
                <BookDetail item={book}/>
            <FooterSection />
        </>
    )
}

export default BookItemPage;
 
export const getData = async (slug:string): Promise<Book | null> => {
    // Fetch data from external API
    const book = await BookModel.findOne({ slug });

    if (!book) return null;
    // Pass data to the page via props
    return book;
}

