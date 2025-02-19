import React from "react";
import AppBanner from "@/components/Banner/Banner";
import BioBanner from "../../../public/departmentBannerImages/biology.webp";
import Slideshow from "@/components/Slideshow/Slideshow";
import Calendar from "@/components/Calendar/Calendar";
import biologyEvents from "./biologyEvents";
import styles from "./Biology.module.css";

const Biology = () => {
  const departmentName = "biology";

  return (
    <div>
      <div className={styles.banner}>
        <AppBanner title={departmentName} imageURL={BioBanner} />
      </div>
      <p className="mt-4 ml-4">
        <strong>Weekly Meeting (Biology)</strong>: Wednesday at Lunch
        (11:40-12:40) in room 342
      </p>
      <p className="mt-4 ml-4">
        <strong>Weekly Meeting (HOSA)</strong>: Friday at Lunch (11:40-12:40) in
        room 342
      </p>

      <div className={styles.announcementsContainer + "container lg"}>
        <Slideshow title="Events" slides={biologyEvents} />
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
