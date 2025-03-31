import { StaticImageData } from "next/image";

export interface News {
    image: StaticImageData;
    title: string;
    date: string;
    department: string;
    description: string;
}