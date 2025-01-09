import React from "react";
import styles from "./ScienceButton.module.css";

interface Props {
  buttonText: string;
  link?: string;
}

const ScienceButton = ({ buttonText, link }: Props) => {
  return link ? (
    <a
      href={link}
      className={styles.joinClassroomButton}
      target="_blank"
      rel="noopener noreferrer"
    >
      {buttonText}
    </a>
  ) : (
    <button
      className={styles.joinClassroomButton}
      onClick={() => console.log("Clicked " + buttonText)}
    >
      {buttonText}
    </button>
  );
};

export default ScienceButton;
