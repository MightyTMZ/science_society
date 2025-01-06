import React from "react";
import AppBanner from "@/components/Banner/Banner";
import BioBanner from "../../../public/departmentBannerImages/biology_banner.jpg";
import styles from "./Biology.module.css";

const Biology = () => {
  const departmentName = "biology";

  return (
    <div>
      <div className={styles.banner}>
        <AppBanner title={departmentName} imageURL={BioBanner} />
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

export default Biology;
