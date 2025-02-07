import React from "react";
import AppBanner from "@/components/Banner/Banner";
import engBanner from "../../../public/departmentBannerImages/engineering.avif";
import styles from "./Engineering.module.css";
import Calendar from "@/components/Calendar/Calendar";
import Slideshow from "@/components/Slideshow/Slideshow";
import slides from "./engineeringDepartmentSlides";

const Engineering = () => {
  const departmentName = "engineering";

  return (
    <div>
      <div className={styles.banner}>
        <AppBanner title={departmentName} imageURL={engBanner} />
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

export default Engineering;
