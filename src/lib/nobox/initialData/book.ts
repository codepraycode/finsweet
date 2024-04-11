import { Book } from "../structures/book.structure";

const books: Book[] = [
  {
    image: {
      thumbmail: "https://via.placeholder.com/150", // Placeholder thumbnail
      banner: "https://via.placeholder.com/400x200", // Placeholder banner
    },
    title: "The Hitchhiker's Guide to the Galaxy",
    slug: "hitchhikers-guide",
    genre: ["Science Fiction", "Comedy"],
    price: 10000.99,
    summary: [
      "Douglas Adams' comedic masterpiece.",
      "Follow Arthur Dent on his wacky adventures through space.",
    ],
    date_released: "1979-10-12",
    author: {
      name: "Douglas Adams",
      about: "British science fiction writer, humorist, dramatist, and screenwriter.",
      image: "https://via.placeholder.com/150", // Placeholder author image
    },
  },
  {
    image: {
      thumbmail: "https://via.placeholder.com/150", // Placeholder thumbnail
      banner: "https://via.placeholder.com/400x200", // Placeholder banner
    },
    title: "Pride and Prejudice",
    slug: "pride-and-prejudice",
    genre: ["Romance", "Classic Literature"],
    price: 3500.99,
    summary: [
      "Jane Austen's timeless tale of love and society.",
      "Follow Elizabeth Bennet as she navigates love and life.",
    ],
    date_released: "1813-01-28",
    author: {
      name: "Jane Austen",
      about: "English novelist known for her wit and social commentary.",
      image: "https://via.placeholder.com/150", // Placeholder author image
    },
  },
  {
    image: {
      thumbmail: "https://via.placeholder.com/150", // Placeholder thumbnail
      banner: "https://via.placeholder.com/400x200", // Placeholder banner
    },
    title: "To Kill a Mockingbird",
    slug: "to-kill-a-mockingbird",
    genre: ["Drama", "Coming-of-Age"],
    price: 900.99,
    summary: [
      "Harper Lee's Pulitzer Prize-winning novel about racial injustice in the American South.",
      "Follow Scout Finch as she learns valuable life lessons.",
    ],
    date_released: "1960-11-11",
    author: {
      name: "Harper Lee",
      about: "American novelist who wrote the classic To Kill a Mockingbird.",
      image: "https://via.placeholder.com/150", // Placeholder author image
    },
  },
];


export default books;