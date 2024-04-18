export function slugify(text: string): string {
    // Convert text to lowercase
    text = text.toLowerCase();
    // Remove non-word characters (excluding hyphens and spaces)
    text = text.replace(/[^\w\s-]/g, '');
    // Replace whitespace characters with hyphens
    text = text.replace(/\s+/g, '-');
    // Replace multiple consecutive hyphens with a single hyphen
    text = text.replace(/-+/g, '-');
    return text;
}
