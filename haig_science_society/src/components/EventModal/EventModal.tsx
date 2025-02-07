import React from "react";
import styles from "./EventModal.module.css";
//import Image from "next/image";
// import { StaticImageData } from "next/image";

interface EventModalProps {
  isOpen: boolean;
  onClose: () => void;
  // image: StaticImageData;
  title: string;
  date: string;
  startTime: string;
  endTime: string;
  location: string;
  description: string;
  status: "Upcoming" | "In Progress" | "Past";
}

const EventModal = ({
  isOpen,
  onClose,
  // image,
  title,
  date,
  startTime,
  endTime,
  location,
  description,
  status,
}: EventModalProps) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <span className={styles.closeButton} onClick={onClose}>
          &times;
        </span>
        {/*<Image
          src={image}
          alt={title}
          className={styles.modalImage}
          width={400}
          height={250}
        />*/}
        <h2>{title}</h2>
        <p>
          <strong>Date:</strong> {date}
        </p>
        <p>
          <strong>Time:</strong> {startTime} - {endTime}
        </p>
        <p>
          <strong>Location:</strong> {location}
        </p>
        <p>
          <strong>Description:</strong> {description}
        </p>
        <p className={`${styles.status} ${styles[status.toLowerCase()]}`}>
          {status}
        </p>
      </div>
    </div>
  );
};

export default EventModal;
