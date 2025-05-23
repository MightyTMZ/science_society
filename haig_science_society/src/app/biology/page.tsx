import React from "react";
import AppBanner from "@/components/Banner/Banner";
import BioBanner from "../../../public/departmentBannerImages/biology2.jpg";
import Slideshow from "@/components/Slideshow/Slideshow";
import Calendar from "@/components/Calendar/Calendar";
import biologyEvents from "./biologyEvents";
import styles from "./Biology.module.css";
import ClassroomCopyCode from "@/components/ClassroomCopyCode/ClassroomCopyCode";

const Biology = () => {
  const departmentName = "biology";

  return (
    <div>
      <div className={styles.banner}>
        <AppBanner title={departmentName} imageURL={BioBanner} />
      </div>
      <p
        className="mt-4 ml-4"
        style={{
          fontSize: "24px",
        }}
      >
        <strong>Weekly Meeting (Biology)</strong>: Wednesday at Lunch
        (11:40-12:40) in room 342
        <ClassroomCopyCode code="Q4CKAH7" />
      </p>
      <p
        className="mt-4 ml-4"
        style={{
          fontSize: "24px",
        }}
      >
        <strong>Weekly Meeting (HOSA)</strong>: Friday at Lunch (11:40-12:40) in
        room 342
        <ClassroomCopyCode code="VEN2YSN" />
      </p>

      <div className={styles.announcementsContainer + "container lg"}>
        <Slideshow title="News" slides={biologyEvents} />
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
