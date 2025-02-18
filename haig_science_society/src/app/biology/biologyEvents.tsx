// for storing all biology events

import square from "../../../public/hosa.png";
import { Event } from "@/types/Event";

const bioEvents: Event[] = [
  /*{
    image: square,
    title: "HOSA Dental Science",
    date: "2025-02-21",
    startTime: "11:40",
    endTime: "12:40",
    location: "Room 342",
    description: `
    Dental Science provides members with the opportunity to gain knowledge and skills
required for dental careers. This event aims to inspire members to learn more about careers in
the dental field. 
    `,
    status: "Upcoming",
  },
  {
    image: square,
    title: "HOSA Dental Science",
    date: "2025-02-28",
    startTime: "11:40",
    endTime: "12:40",
    location: "Room 342",
    description: `
    Dental Science provides members with the opportunity to gain knowledge and skills
required for dental careers. This event aims to inspire members to learn more about careers in
the dental field. 
    `,
    status: "Upcoming",
  },
  {
    image: square,
    title: "HOSA Dental Science",
    date: "2025-03-07",
    startTime: "11:40",
    endTime: "12:40",
    location: "Room 342",
    description: `
    Dental Science provides members with the opportunity to gain knowledge and skills
required for dental careers. This event aims to inspire members to learn more about careers in
the dental field. 
    `,
    status: "Upcoming",
  },
  {
    image: square,
    title: "HOSA Dental Science",
    date: "2025-03-14",
    startTime: "11:40",
    endTime: "12:40",
    location: "Room 342",
    description: `
    Dental Science provides members with the opportunity to gain knowledge and skills
required for dental careers. This event aims to inspire members to learn more about careers in
the dental field. 
    `,
    status: "Upcoming",
  },
  {
    image: square,
    title: "HOSA Dental Science",
    date: "2025-03-21",
    startTime: "11:40",
    endTime: "12:40",
    location: "Room 342",
    description: `
    Dental Science provides members with the opportunity to gain knowledge and skills
required for dental careers. This event aims to inspire members to learn more about careers in
the dental field. 
    `,
    status: "Upcoming",
  },
  {
    image: square,
    title: "HOSA Dental Science",
    date: "2025-03-28",
    startTime: "11:40",
    endTime: "12:40",
    location: "Room 342",
    description: `
    Dental Science provides members with the opportunity to gain knowledge and skills
required for dental careers. This event aims to inspire members to learn more about careers in
the dental field. 
    `,
    status: "Upcoming",
  },*/
];

// void function
/* 
const updateEventStatus = () => {
  const now = new Date(); // Current time in UTC
  const options = { timeZone: "America/Toronto" };
  const currentTime = new Date(now.toLocaleString("en-US", options));

  bioEvents.forEach((event: Event) => {
    const eventStart = new Date(`${event.date}T${event.startTime}:00-05:00`); // Toronto is UTC-5 (or UTC-4 in DST)
    const eventEnd = new Date(`${event.date}T${event.endTime}:00-05:00`);

    if (currentTime < eventStart) {
      event.status = "Upcoming";
    } else if (currentTime >= eventStart && currentTime <= eventEnd) {
      event.status = "In Progress";
    } else {
      event.status = "Past";
    }
  });
};

updateEventStatus();*/

export default bioEvents;
