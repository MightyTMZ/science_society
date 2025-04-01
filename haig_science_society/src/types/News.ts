import { StaticImageData } from "next/image";

export interface News {
    image: StaticImageData;
    title: string;
    date: string;
    sourceTitle: string;
    sourceLink: string;
    department: string;
    description: string;
}

