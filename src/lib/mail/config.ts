import { Resend } from 'resend';


const api_key = process.env.NEXT_PUBLIC_RESEND_API_KEY;
const mail_from = process.env.NEXT_PUBLIC_RESEND_MAIL_FROM;



if (!mail_from) throw new Error("Mail from isn't given");

interface MailOption {
    to: string,
    subject: string,
    body: string,
}


const resend = new Resend(api_key);


export async function sendEmail(options: MailOption ) {

    if (!mail_from) return;

    const {data, error} = await resend.emails.send({
      from:  mail_from,
      to: options.to,
      subject: options.subject,
      html: options.body
    });

    if (error) {
        throw error;
    }

    return data;
}

