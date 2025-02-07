import React from "react";
import AppBanner from "@/components/Banner/Banner";
import physicsBanner from "../../../public/departmentBannerImages/physics.jpg";
import styles from "./Physics.module.css";
import Calendar from "@/components/Calendar/Calendar";
import Slideshow from "@/components/Slideshow/Slideshow";
import slides from "./physicsDepartmentEvents";

const Physics = () => {
  const departmentName = "physics";

  return (
    <div>
      <div className={styles.banner}>
        <AppBanner title={departmentName} imageURL={physicsBanner} />
      </div>

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

export default Physics;
