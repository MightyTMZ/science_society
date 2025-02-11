// for storing all biology events

import square from "../../../public/square.png";
import { Event } from "@/types/Event";

const chemEvents: Event[] = [
  {
    image: square,
    title: "Chemistry: Weekly Meeting",
    date: "2025-02-10",
    startTime: "11:40",
    endTime: "12:20",
    location: "Ms. Bell's room",
    description: "It is an awesome event and we hope to see you all there",
    status: "Upcoming",
  },
  {
    image: square,
    title: "Chemistry: Weekly Meeting",
    date: "2025-02-17",
    startTime: "11:40",
    endTime: "12:20",
    location: "Ms. Bell's room",
    description: "It is an awesome event and we hope to see you all there",
    status: "Upcoming",
  },
];

// void function
/* 
const updateEventStatus = () => {
  const now = new Date(); // Current time in UTC
  const options = { timeZone: "America/Toronto" };
  const currentTime = new Date(now.toLocaleString("en-US", options));

  chemEvents.forEach((event: Event) => {
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

export default chemEvents;
