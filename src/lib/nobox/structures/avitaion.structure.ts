import { Space } from "../../nobox-client";
import { createRowSchema } from "../config";
import aviation from "../initialData/aviation";


type Place = {
    short: string,
    full: string
}
type Route = {
    from: Place,
    to: Place,
}
export interface Aviation {
    logo?: string,
    name: string,
    company_name: string,
    details: string,
    routes: Route[],
    link: string,
    fleet_size?: number | string,
    headoffice?: string,
    hub?:string,
    base?:string,
}

export const AviationStructure: Space<Aviation> = {
    space: "Aviation",
    description: "A Record Space for Aviation companies",
    initialData: aviation,
    structure: {
        logo: {
            description: "Company's logo",
            type: String,
            required: false
        },
        name: {
            description: "Company's regular name",
            type: String,
            required: true
        },
        company_name: {
            description: "Company's name",
            type: String,
            required: true
        },
        details: {
            description: "Company's detail",
            required: true,
            type: String,
        },
        routes: {
            description: "Routes's First Name",
            required: true,
            type: Array,
        },
        link: {
            description: "Company's page",
            required: true,
            type: String,
        },
        fleet_size: {
            description: "Company's fleet size",
            type: String,
        },
        headoffice: {
            description: "Company's head office",
            type: String,
        },
        hub: {
            description: "Company's hub",
            type: String,
        },
        base: {
            description: "Company's base",
            type: String,
        },
    }
}

export const AviationModel = createRowSchema<Aviation>(AviationStructure);