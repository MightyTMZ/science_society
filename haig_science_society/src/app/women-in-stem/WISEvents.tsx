// for storing all biology events

import square from "../../../public/WiSTEM.png";
import { Event } from "@/types/Event";

const wisEvents: Event[] = [
  /*{
    image: square,
    title: "Women in STEM Bi-Weekly Meeting",
    date: "2025-02-21",
    startTime: "12:00",
    endTime: "12:30",
    location: "Room 253",
    description: "Bi-weekly meeting of Women In STEM (WiSTEM), an organization on a mission to fight gender inequality in STEM by empowering and encouraging teens to get engaged with the sciences.",
    status: "Upcoming",
  },
  {
    image: square,
    title: "Women in STEM Bi-Weekly Meeting",
    date: "2025-03-07",
    startTime: "12:00",
    endTime: "12:30",
    location: "Room 253",
    description: "Bi-weekly meeting of Women In STEM (WiSTEM), an organization on a mission to fight gender inequality in STEM by empowering and encouraging teens to get engaged with the sciences.",
    status: "Upcoming",
  },
  {
    image: square,
    title: "Women in STEM Bi-Weekly Meeting",
    date: "2025-03-21",
    startTime: "12:00",
    endTime: "12:30",
    location: "Room 253",
    description: "Bi-weekly meeting of Women In STEM (WiSTEM), an organization on a mission to fight gender inequality in STEM by empowering and encouraging teens to get engaged with the sciences.",
    status: "Upcoming",
  },
  {
    image: square,
    title: "Women in STEM Bi-Weekly Meeting",
    date: "2025-04-04",
    startTime: "12:00",
    endTime: "12:30",
    location: "Room 253",
    description: "Bi-weekly meeting of Women In STEM (WiSTEM), an organization on a mission to fight gender inequality in STEM by empowering and encouraging teens to get engaged with the sciences.",
    status: "Upcoming",
  },
  {
    image: square,
    title: "Women in STEM Bi-Weekly Meeting",
    date: "2025-04-18",
    startTime: "12:00",
    endTime: "12:30",
    location: "Room 253",
    description: "Bi-weekly meeting of Women In STEM (WiSTEM), an organization on a mission to fight gender inequality in STEM by empowering and encouraging teens to get engaged with the sciences.",
    status: "Upcoming",
  },
  {
    image: square,
    title: "Women in STEM Bi-Weekly Meeting",
    date: "2025-05-02",
    startTime: "12:00",
    endTime: "12:30",
    location: "Room 253",
    description: "Bi-weekly meeting of Women In STEM (WiSTEM), an organization on a mission to fight gender inequality in STEM by empowering and encouraging teens to get engaged with the sciences.",
    status: "Upcoming",
  },
  {
    image: square,
    title: "Women in STEM Bi-Weekly Meeting",
    date: "2025-05-16",
    startTime: "12:00",
    endTime: "12:30",
    location: "Room 253",
    description: "Bi-weekly meeting of Women In STEM (WiSTEM), an organization on a mission to fight gender inequality in STEM by empowering and encouraging teens to get engaged with the sciences.",
    status: "Upcoming",
  },
  {
    image: square,
    title: "Women in STEM Bi-Weekly Meeting",
    date: "2025-05-30",
    startTime: "12:00",
    endTime: "12:30",
    location: "Room 253",
    description: "Bi-weekly meeting of Women In STEM (WiSTEM), an organization on a mission to fight gender inequality in STEM by empowering and encouraging teens to get engaged with the sciences.",
    status: "Upcoming",
  },
  {
    image: square,
    title: "Women in STEM Bi-Weekly Meeting",
    date: "2025-06-13",
    startTime: "12:00",
    endTime: "12:30",
    location: "Room 253",
    description: "Bi-weekly meeting of Women In STEM (WiSTEM), an organization on a mission to fight gender inequality in STEM by empowering and encouraging teens to get engaged with the sciences.",
    status: "Upcoming",
  },*/
];

// void function
/* 
const updateEventStatus = () => {
  const now = new Date(); // Current time in UTC
  const options = { timeZone: "America/Toronto" };
  const currentTime = new Date(now.toLocaleString("en-US", options));

  wisEvents.forEach((event: Event) => {
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

export default wisEvents;
