import React from "react";
import LandingPageBanner from "@/components/LandingPageComponents/Banner/Banner";
import Slideshow from "@/components/Slideshow/Slideshow";
import square from "../../public/square.png";
import { Event } from "@/types/Event";
import bioEvents from "./biology/biologyEvents";
import chemEvents from "./chemistry/chemistryEvents";
import wisEvents from "./women-in-stem/WISEvents";
import physicsEvents from "./physics/physicsDepartmentEvents";
import engineeringEvents from "./engineering/engineeringDepartmentSlides";
import dsEvents from "./data-science/dataScienceEvents";

const Home = () => {
  const slides = bioEvents
    .concat(chemEvents)
    .concat(wisEvents)
    .concat(physicsEvents)
    .concat(engineeringEvents)
    .concat(dsEvents);

  slides.sort((d) => Date.now() - Date.parse(d.date));

  // void function
  const updateEventStatus = () => {
    const now = new Date(); // Current time in UTC
    const options = { timeZone: "America/Toronto" };
    const currentTime = new Date(now.toLocaleString("en-US", options));

    slides.forEach((event: Event) => {
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

  updateEventStatus();

  return (
    <div>
      <LandingPageBanner />
      <Slideshow slides={slides} title="Upcoming events" />
    </div>
  );
};

export default Home;
