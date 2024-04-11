import { Space } from "../../nobox-client";
import { createRowSchema } from "../config";
import books from "../initialData/book";

export interface Book {
    image: {
        thumbmail: string,
        banner: string,
    },
    title: string,
    slug: string,
    genre: string[],
    price: number,
    summary: string[],
    date_released: string,
    author: {
        name: string,
        about: string,
        image: string,
    }
}

export const BookStructure: Space<Book> = {
    space: "Books",
    description: "A Record Space for Books",
    initialData: books,
    structure: {
        image: {
            description: "Book featured images",
            type: Object,
            required: false,
        },
        title: {
            description: "Book title",
            type: String,
            required: true,
        },
        slug: {
            description: "Book slug",
            type: String,
            required: true,
        },
        genre: {
            description: "Book genre",
            type: Array,
            required: false,
        },
        price: {
            description: "Book's cost",
            type: Number,
            required: true,
        },
        summary: {
            description: "Book's summary",
            type: String,
            required: true,
        },
        date_released: {
            description: "Book's release date",
            type: String,
            required: true,
        },
        author: {
            description: "Book's author",
            type: Object,
            required: true,
        },
    }
}

export const BookModel = createRowSchema<Book>(BookStructure);
