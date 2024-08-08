export interface Comic {
    id: number;
    num: number;
    title?: string;
    img?: string;
    alt?: string;
    safeTitle?: string;
    transcript?: string;
    year?: string;
    month?: string;
    day?: string;
    cachedAt: Date;
}