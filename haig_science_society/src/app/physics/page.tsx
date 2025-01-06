import React from "react";
import AppBanner from "@/components/Banner/Banner";
import physicsBanner from "../../../public/departmentBannerImages/physics.jpg";
import styles from "./Physics.module.css";

const Physics = () => {
  const departmentName = "physics";

  return (
    <div>
      <div className={styles.banner}>
        <AppBanner title={departmentName} imageURL={physicsBanner} />
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

export default Physics;
