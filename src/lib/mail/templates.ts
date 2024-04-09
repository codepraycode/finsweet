export const GetBookMailTemplate = (link:string) => {
    return `
        <h4>Hello there,</h4>

        <p>Thank you for purchasing my book, follow the link below to obtain your copy.<p>

        <a href="${link}" style="display:block; width: 130px; background-color: #666eff; color:white; padding: 15px; border-radius: 5px; text-decoration:none;">Get your copy</a>

        <br/><br/>

        or use this link:
        <br/><br/>

        <a href="${link}">${link}</a>
    `
}