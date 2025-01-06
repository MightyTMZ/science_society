import React from "react";
import AppBanner from "@/components/Banner/Banner";
import engBanner from "../../../public/departmentBannerImages/engineering.avif";
import styles from "./Engineering.module.css";

const Engineering = () => {
  const departmentName = "engineering";

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

export default Engineering;
