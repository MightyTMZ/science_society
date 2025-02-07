import React from "react";
import AppBanner from "@/components/Banner/Banner";
import BioBanner from "../../../public/departmentBannerImages/biology.webp";
import Slideshow from "@/components/Slideshow/Slideshow";
import Calendar from "@/components/Calendar/Calendar";
import slides from "./biologyEvents";
import styles from "./Biology.module.css";

const Biology = () => {
  const departmentName = "biology";

  return (
    <div>
      <div className={styles.banner}>
        <AppBanner title={departmentName} imageURL={BioBanner} />
      </div>

      <div className={styles.announcementsContainer + "container lg"}>
        <Slideshow title="Announcements" slides={slides} />
      </div>
      <div className={styles.calendarContainer}>
        <h1 className={styles.calendarHeading}>
          {departmentName} department calendar
        </h1>
        <Calendar department={departmentName} />
      </div>
    </div>
  );
};

export default Biology;
