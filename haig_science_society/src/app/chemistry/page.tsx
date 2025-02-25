import React from "react";
import AppBanner from "@/components/Banner/Banner";
import ChemBanner from "../../../public/departmentBannerImages/chemistry.webp";
import styles from "./Chemistry.module.css";
import Calendar from "@/components/Calendar/Calendar";
import Slideshow from "@/components/Slideshow/Slideshow";
import slides from "./chemistryEvents";
import ClassroomCopyCode from "@/components/ClassroomCopyCode/ClassroomCopyCode";

const Chemistry = () => {
  const departmentName = "chemistry";

  return (
    <div>
      <div className={styles.banner}>
        <AppBanner title={departmentName} imageURL={ChemBanner} />
      </div>

      <p
        className="mt-4 ml-4"
        style={{
          fontSize: "24px",
        }}
      >
        <strong>Weekly Meeting</strong>: Mondays at Lunch (11:40-12:40) in room
        350
        <ClassroomCopyCode code="VHVRAZR" />
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

export default Chemistry;
