import React from "react";
import AppBanner from "@/components/Banner/Banner";
import physicsBanner from "../../../public/departmentBannerImages/physics.jpg";
import styles from "./Physics.module.css";
import square from "../../../public/square.png";
import Slideshow from "@/components/Slideshow/Slideshow";

const Physics = () => {
  const departmentName = "physics";

  const slides = [
    {
      image: square,
      title: "Explore the Ocean",
      description:
        "Dive into the mysteries of the deep blue sea and discover marine life.",
    },
    {
      image: square,
      title: "Mountain Adventures",
      description:
        "Feel the thrill of climbing the world's most breathtaking peaks.",
    },
    {
      image: square,
      title: "Cityscapes",
      description:
        "Experience the vibrant life and culture of urban landscapes.",
    },
    {
      image: square,
      title: "Cityscapes",
      description:
        "Experience the vibrant life and culture of urban landscapes.",
    },
    {
      image: square,
      title: "Cityscapes",
      description:
        "Experience the vibrant life and culture of urban landscapes.",
    },
    {
      image: square,
      title: "Cityscapes",
      description:
        "Experience the vibrant life and culture of urban landscapes.",
    },
    {
      image: square,
      title: "Cityscapes",
      description:
        "Experience the vibrant life and culture of urban landscapes.",
    },
  ];

  return (
    <div>
      <div className={styles.banner}>
        <AppBanner title={departmentName} imageURL={physicsBanner} />
      </div>

      <div className={styles.announcementsContainer + "container lg"}>
        <Slideshow title="Announcements" slides={slides} />
      </div>
    </div>
  );
};

export default Physics;
