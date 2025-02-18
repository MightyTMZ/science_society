// for storing all biology events

import square from "../../../public/engineering_square.png";
import { Event } from "@/types/Event";

const engineeringEvents: Event[] = [
  /*{
    image: square,
    title: "Engineering: Weekly Meeting",
    date: "2025-02-20",
    startTime: "11:50",
    endTime: "12:25",
    location: "Room 256",
    description: `
    
    `,
    status: "Upcoming",
  },
  {
    image: square,
    title: "Engineering: Weekly Meeting",
    date: "2025-02-27",
    startTime: "11:50",
    endTime: "12:25",
    location: "Room 256",
    description: `
    
    `,
    status: "Upcoming",
  },
  {
    image: square,
    title: "Engineering: Weekly Meeting",
    date: "2025-03-07",
    startTime: "11:50",
    endTime: "12:25",
    location: "Room 256",
    description: `
    
    `,
    status: "Upcoming",
  },
  {
    image: square,
    title: "Engineering: Weekly Meeting",
    date: "2025-03-14",
    startTime: "11:50",
    endTime: "12:25",
    location: "Room 256",
    description: `
    
    `,
    status: "Upcoming",
  },
  {
    image: square,
    title: "Engineering: Weekly Meeting",
    date: "2025-03-21",
    startTime: "11:50",
    endTime: "12:25",
    location: "Room 256",
    description: `
    
    `,
    status: "Upcoming",
  },
  {
    image: square,
    title: "Engineering: Weekly Meeting",
    date: "2025-03-28",
    startTime: "11:50",
    endTime: "12:25",
    location: "Room 256",
    description: `
    
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

  engineeringEvents.forEach((event: Event) => {
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

export default engineeringEvents;
