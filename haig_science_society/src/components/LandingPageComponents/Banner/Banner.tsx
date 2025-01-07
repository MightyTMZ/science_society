import React from "react";
import styles from "./Banner.module.css";
import Link from "next/link"; // Import Link for navigation
// import landingPageBanner from "../../../../public/departmentBannerImages/scientific_exploration_background_800_wht.jpg";

const departments = [
  { id: 1, title: "biology", reference: "/biology" },
  { id: 2, title: "chemistry", reference: "/chemistry" },
  { id: 3, title: "physics", reference: "/physics" },
  { id: 4, title: "engineering", reference: "/engineering" },
];

const afilliatedOrganizations = [
  { id: 1, title: "women in stem", reference: "/women-in-stem" },
  { id: 2, title: "data science", reference: "/data-science" },
];

const LandingPageBanner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.EarlHaig}>Earl Haig</div>
      <div className={styles.ScienceSociety}>Science Society</div>
      <div className={styles.scienceDepartments}>
        {departments.map((department, index) => (
          <React.Fragment key={department.id}>
            <Link
              href={department.reference}
              className={styles.departmentSubLink}
            >
              {department.title}
            </Link>
            {index < departments.length - 1 && (
              <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
            )}
          </React.Fragment>
        ))}
      </div>
      <div className={styles.affiliatedOrganizations}>
        {afilliatedOrganizations.map((department, index) => (
          <React.Fragment key={department.id}>
            <Link
              href={department.reference}
              className={styles.departmentSubLink}
            >
              {department.title}
            </Link>
            {index < afilliatedOrganizations.length - 1 && (
              <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
            )}
          </React.Fragment>
        ))}
      </div>
      <p className={styles.creditLine}>Website created by <i>Engineering Department of Earl Haig Science Society</i></p>
    </div>
  );
};

export default LandingPageBanner;
