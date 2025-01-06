import React from "react";
import AppBanner from "@/components/Banner/Banner";
import ChemBanner from "../../../public/departmentBannerImages/chemistry.webp";
import styles from "./Chemistry.module.css";

const Chemistry = () => {
  const departmentName = "chemistry";

  return (
    <div>
      <div className={styles.banner}>
        <AppBanner title={departmentName} imageURL={ChemBanner} />
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

export default Chemistry;
