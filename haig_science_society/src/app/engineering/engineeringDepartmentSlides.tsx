// for storing all biology events

import square from "../../../public/square.png";
import tsf from "../../../public/tsf.png";
import { Event } from "@/types/Event";

const engineeringEvents: Event[] = [
  {
    image: tsf,
    title: "Engineering: Toronto Science Fair (TSF) Information Meeting",
    date: "2025-02-13",
    startTime: "11:40",
    endTime: "12:25",
    location: "Room 256",
    description: `
    Learn about the upcoming Toronto Science Fair (TSF) and how you can participate in it to win 
    medals, scholarships, special awards and even a chance to go to the Canada Wide Science Fair (CWSF)
    `,
    status: "Upcoming",
  },
  {
    image: square,
    title: "Engineering: Weekly Meeting",
    date: "2025-02-20",
    startTime: "11:40",
    endTime: "12:25",
    location: "Room 256",
    description: `
    1st preparation session for Toronto Science Fair (TSF) competitors.
    `,
    status: "Upcoming",
  },

  {
    image: square,
    title: "Executive Meeting",
    date: "2025-02-10",
    startTime: "11:40",
    endTime: "12:30",
    location: "Room 353",
    description: `
    All department heads will meet...
    `,
    status: "Upcoming",
  },
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
