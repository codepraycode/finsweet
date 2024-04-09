import { DownloadBookTemplate } from '@/components/templates';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';


const api_key = process.env.RESEND_API_KEY;
const mail_from = process.env.RESEND_MAIL_FROM;

const resend = new Resend(api_key);


export async function POST(req:NextRequest, res: NextResponse) {

    const {mail_to, subject, link} = await req.json();

    if (!mail_from) return Response.json({message:"No sender mail given"}, {status: 500});
    
    try {
        const data = await resend.emails.send({
            from: mail_from,
            to: [mail_to],
            subject,
            react: DownloadBookTemplate({ link }),
        });

        return Response.json(data);
    } catch (error) {
        return Response.json({ error });
    }
}
