import { StaticImageData } from "next/image";

export type Event {
    image: StaticImageData;
    title: string;
    date: string;
    startTime: string;
    endTime: string;
    location: string;
    description: string;
    status: "Upcoming" | "In Progress" | "Past";
}