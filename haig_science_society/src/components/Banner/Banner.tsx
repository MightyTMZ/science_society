import React from "react";
import { StaticImageData } from "next/image";
import styles from "./Banner.module.css";

interface BannerProps {
  title: string;
  imageURL: StaticImageData;
}

const AppBanner = ({ title, imageURL }: BannerProps) => {
  return (
    <div
      className={styles.banner}
      style={{
        backgroundImage: `url(${imageURL})`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {title}
    </div>
  );
};

export default AppBanner;
