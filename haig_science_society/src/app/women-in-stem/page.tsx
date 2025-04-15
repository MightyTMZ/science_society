import React from "react";
import AppBanner from "@/components/Banner/Banner";
import engBanner from "../../../public/departmentBannerImages/scientific_exploration_background_800_wht.jpg";
import styles from "./WIS.module.css";
import Calendar from "@/components/Calendar/Calendar";
import Slideshow from "@/components/Slideshow/Slideshow";
import slides from "./WISEvents";

const WomenInSTEM = () => {
  const departmentName = "Women in STEM (WiSTEM)";

  return (
    <div>
      <div className={styles.banner}>
        <AppBanner title={departmentName} imageURL={engBanner} />
      </div>
      <p className="mt-4 ml-4"><strong>Weekly Meeting</strong>: Bi-weekly (every two weeks) Fridays at Lunch (11:40-12:40) in room 253</p>

      <div className={styles.announcementsContainer + "container lg"}>
        <Slideshow title="News" slides={slides} />
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

export default WomenInSTEM;
