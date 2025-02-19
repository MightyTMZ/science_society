// for storing all biology events

// import square from "../../../public/physics_square.png";
import { Event } from "@/types/Event";

const physicsEvents: Event[] = [
  /*{
    image: square,
    title: "Physics: Weekly Meeting",
    date: "2025-02-19",
    startTime: "11:50",
    endTime: "12:20",
    location: "Room 353",
    description: "",
    status: "Upcoming",
  },
  {
    image: square,
    title: "Physics: Weekly Meeting",
    date: "2025-02-26",
    startTime: "11:50",
    endTime: "12:20",
    location: "Room 353",
    description: "",
    status: "Upcoming",
  },
  {
    image: square,
    title: "Physics: Weekly Meeting",
    date: "2025-03-05",
    startTime: "11:50",
    endTime: "12:20",
    location: "Room 353",
    description: "",
    status: "Upcoming",
  },
  {
    image: square,
    title: "Physics: Weekly Meeting",
    date: "2025-03-12",
    startTime: "11:50",
    endTime: "12:20",
    location: "Room 353",
    description: "",
    status: "Upcoming",
  },
  {
    image: square,
    title: "Physics: Weekly Meeting",
    date: "2025-03-19",
    startTime: "11:50",
    endTime: "12:20",
    location: "Room 353",
    description: "",
    status: "Upcoming",
  },
  {
    image: square,
    title: "Physics: Weekly Meeting",
    date: "2025-03-26",
    startTime: "11:50",
    endTime: "12:20",
    location: "Room 353",
    description: "",
    status: "Upcoming",
  },*/
];

// void function
/* 
const updateEventStatus = () => {
  const now = new Date(); // Current time in UTC
  const options = { timeZone: "America/Toronto" };
  const currentTime = new Date(now.toLocaleString("en-US", options));

  physicsEvents.forEach((event: Event) => {
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

export default physicsEvents;
