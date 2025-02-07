import React from "react";
import AppBanner from "@/components/Banner/Banner";
import ChemBanner from "../../../public/departmentBannerImages/chemistry.webp";
import styles from "./Chemistry.module.css";
import Calendar from "@/components/Calendar/Calendar";
import Slideshow from "@/components/Slideshow/Slideshow";
import slides from "./chemistryEvents";

const Chemistry = () => {
  const departmentName = "chemistry";

  return (
    <div>
      <div className={styles.banner}>
        <AppBanner title={departmentName} imageURL={ChemBanner} />
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

export default Chemistry;
