// for storing all biology events

import square from "../../../public/square.png";
import { Event } from "@/types/Event";

const bioEvents: Event[] = [
  {
    image: square,
    title: "Example in progress",
    date: "2025-02-11",
    startTime: "08:15",
    endTime: "16:00",
    location: "Dr. William's room",
    description: "It is an awesome event and we hope to see you all there",
    status: "Upcoming",
  },
  {
    image: square,
    title: "Biology: Weekly Meeting",
    date: "2025-02-14",
    startTime: "15:15",
    endTime: "16:00",
    location: "Dr. William's room",
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
