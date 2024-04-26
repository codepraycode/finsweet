

export function parseExternalLink(url:string): string {
    const protocolRegex = /^(http|https):\/\//i;

    if (!protocolRegex.test(url)) {
        return 'http://' + url;
    }

    return url;
}