import { Space } from "../../nobox-client";
import { createRowSchema } from "../config";

export interface Ads {
    image: string,
    title: string,
    about: string,
    link: string,
}

export const AdsStructure: Space<Ads> = {
    space: "Ads",
    description: "A Record Space for Ads",
    structure: {
        image: {
            description: "Ads featured images",
            type: String,
            required: true,
        },
        title: {
            description: "Ads title",
            type: String,
            required: true,
        },
        about: {
            description: "Ads about",
            type: String,
            required: true,
        },
        link: {
            description: "Ads link",
            type: String,
            required: true,
        },
    }
}

export const AdsModel = createRowSchema<Ads>(AdsStructure);
