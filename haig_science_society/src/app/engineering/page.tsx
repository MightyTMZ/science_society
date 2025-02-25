import React from "react";
import AppBanner from "@/components/Banner/Banner";
import engBanner from "../../../public/departmentBannerImages/engineering.avif";
import styles from "./Engineering.module.css";
import Calendar from "@/components/Calendar/Calendar";
import Slideshow from "@/components/Slideshow/Slideshow";
import slides from "./engineeringDepartmentSlides";
import ClassroomCopyCode from "@/components/ClassroomCopyCode/ClassroomCopyCode";

const Engineering = () => {
  const departmentName = "engineering";

  return (
    <div>
      <div className={styles.banner}>
        <AppBanner title={departmentName} imageURL={engBanner} />
      </div>
      <p
        className="mt-4 ml-4"
        style={{
          fontSize: "24px",
        }}
      >
        <strong>Weekly Meeting</strong>: Thursdays at Lunch (11:40-12:40) in
        room 256
        <ClassroomCopyCode code="MADOGHZ" />
      </p>

      <div className={styles.announcementsContainer + "container lg"}>
        <Slideshow title="Events" slides={slides} />
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

export default Engineering;
