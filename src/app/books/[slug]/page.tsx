
import BookDetail from "@/components/BookDetail";
import FooterSection from "@/components/Footer";
import Header from "@/components/Header";
import { Book, BookModel } from "@/lib/nobox/structures/book.structure";
import { headers } from "next/headers";


const BookItemPage = async ({ params }: { params: { slug: string } }) => {

    // console.log("Params", params);
    const headerList = headers();
    let baseUrl = headerList.get("referer");

    if (baseUrl) {
        baseUrl = baseUrl.slice(0, baseUrl.length - 1)
    }
    
    const {slug} = params;

    const book = await getData(slug);


    return (
        <>
            <Header />
                <BookDetail item={book} baseUrl={baseUrl as string}/>
            <FooterSection />
        </>
    )
}

export default BookItemPage;
 
const getData = async (slug:string): Promise<Book | null> => {
    // Fetch data from external API
    const book = await BookModel.findOne({ slug });

    if (!book) return null;
    // Pass data to the page via props
    return book;
}

