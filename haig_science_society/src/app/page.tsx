import React from "react";
import LandingPageBanner from "@/components/LandingPageComponents/Banner/Banner";
import Slideshow from "@/components/Slideshow/Slideshow";
import square from "../../public/square.png";

const Home = () => {
  const slides = [
    {
      image: square,
      title: "Explore the Ocean",
      startTime: "11:40 AM",
      endTime: "12:30 PM",
      location: "Room 353",
      date: "2025-",
      status: "In Progress",
      description:
        "Dive into the mysteries of the deep blue sea and discover marine life.",
    },
    {
      image: square,
      title: "Mountain Adventures",
      startTime: "11:40 AM",
      endTime: "12:30 PM",
      location: "Room 353",
      date: "2025-",
      status: "In Progress",
      description:
        "Feel the thrill of climbing the world's most breathtaking peaks.",
    },
    {
      image: square,
      title: "Cityscapes",
      startTime: "11:40 AM",
      endTime: "12:30 PM",
      location: "Room 353",
      date: "2025-",
      status: "In Progress",
      description:
        "Experience the vibrant life and culture of urban landscapes.",
    },
    {
      image: square,
      title: "Cityscapes",
      startTime: "11:40 AM",
      endTime: "12:30 PM",
      location: "Room 353",
      date: "2025-",
      status: "In Progress",
      description:
        "Experience the vibrant life and culture of urban landscapes.",
    },
    {
      image: square,
      title: "Cityscapes",
      startTime: "11:40 AM",
      endTime: "12:30 PM",
      location: "Room 353",
      date: "2025-",
      status: "In Progress",
      description:
        "Experience the vibrant life and culture of urban landscapes.",
    },
    {
      image: square,
      title: "Cityscapes",
      startTime: "11:40 AM",
      endTime: "12:30 PM",
      location: "Room 353",
      date: "2025-",
      status: "In Progress",
      description:
        "Experience the vibrant life and culture of urban landscapes.",
    },
    {
      image: square,
      title: "Cityscapes",
      startTime: "11:40 AM",
      endTime: "12:30 PM",
      location: "Room 353",
      date: "2025-",
      status: "In Progress",
      description:
        "Experience the vibrant life and culture of urban landscapes.",
    },
  ];

  return (
    <div>
      <LandingPageBanner />
      <Slideshow slides={slides} title="Upcoming events" />
    </div>
  );
};

export default Home;
