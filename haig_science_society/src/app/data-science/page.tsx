import React from "react";
import AppBanner from "@/components/Banner/Banner";
import engBanner from "../../../public/departmentBannerImages/scientific_exploration_background_800_wht.jpg";
import styles from "./DS.module.css";

const DataScience = () => {
  const departmentName = "data science";

  return (
    <div>
      <div className={styles.banner}>
        <AppBanner title={departmentName} imageURL={engBanner} />
      </div>

      <div className="container lg">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          debitis quidem enim cum voluptates provident maiores quod asperiores
          ad aperiam.
        </p>
      </div>
    </div>
  );
};

export default DataScience;
