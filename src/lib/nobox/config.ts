import { Config, getFunctions, getSchemaCreator } from "../../nobox-client";

const endpoint = process.env.NEXT_PUBLIC_CLIENT_NOBOX_API || "https://api.nobox.cloud";
const project = process.env.NEXT_PUBLIC_CLIENT_NOBOX_PROJECT || "nobox-forms";
const token = process.env.NEXT_PUBLIC_CLIENT_NOBOX_TOKEN || "b4hgbdmjpma_galnmur_jiddmm4dnmpymo43aigb";

// console.log({ endpoint, a: process.env.NEXT_PUBLIC_CLIENT_NOBOX_API })

if (!project) throw new Error("Nobox project is not given");
if (!token) throw new Error("Nobox token is not given")

export const config: Config = {
    endpoint,
    project,
    token,
};

export const createRowSchema = getSchemaCreator(config, { type: "rowed" });

export const Nobox = getFunctions(config);