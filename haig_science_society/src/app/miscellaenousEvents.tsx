// import square from "../../public/square.jpg";
import datascience from "../../public/event_pics/data-science.png"
import wis from "../../public/event_pics/wis.png"
import boat from "../../public/event_pics/boat.png"

import { Event } from "@/types/Event";

export const miscellaneousEvents: Event[] = [
  {
    image: boat,
    title: "Boat Competition",
    date: "2025-02-24",
    startTime: "11:40",
    endTime: "12:30",
    location: "Room 350",
    description:
      "The battle between cardboard boats. Materials will be provided. No premaking the boats. Winners will win free candy prizes.",
    status: "Upcoming",
  },
  {
    image: datascience,
    title: "Introducing Data Science",
    date: "2025-12-15",
    startTime: "11:40",
    endTime: "12:30",
    location: "Room 350",
    description:
      "Introducing our new department of data science!",
    status: "Upcoming",
  },
  {
    image: wis,
    title: "Women in STEM",
    date: "2025-02-24",
    startTime: "11:40",
    endTime: "12:30",
    location: "Room 350",
    description:
      "Prepare for contests, explore  applications, and have fun learning !",
    status: "Upcoming",
  },
];
