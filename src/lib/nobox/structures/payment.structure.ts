import { Space } from "../../../nobox-client";
import { createRowSchema } from "../config";

export interface Payment {
    reference: string,
    email: string,
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
        email: {
            description: "Email of the buyer",
            type: String,
            required: true,
        },
    }
}

export const PaymentModel = createRowSchema<Payment>(PaymentStructure);
