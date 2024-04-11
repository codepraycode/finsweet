import { Space } from "../../nobox-client";
import { createRowSchema } from "../config";

export interface Payment {
    reference: string,
    email: string,
    title: string,
    bookId: string,
    used?: boolean,
}

export const PaymentStructure: Space<Payment> = {
    space: "Payments",
    description: "A Record Space for Book payments",
    structure: {
        reference: {
            description: "Payment reference",
            type: String,
            required: true,
            unique: true,
        },
        used: {
            description: "Payment reference used",
            type: Boolean,
            required: false,
            defaultValue: false,
        },
        email: {
            description: "Email of the buyer",
            type: String,
            required: true,
        },
        title: {
            description: "Book title",
            type: String,
            required: true,
        },
        bookId: {
            description: "Book Id",
            type: String,
            required: true,
        },
    }
}

export const PaymentModel = createRowSchema<Payment>(PaymentStructure);
