import React from "react";
import styles from "./EventModal.module.css";
import Link from "next/link"; // better for Google Calendar
// mix up both using divs and next/link
// for links, make sure the target="_blank"

interface EventModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  date: string;
  startTime: string;
  endTime: string;
  location: string;
  description: string;
  status: "Upcoming" | "In Progress" | "Past";
}

const formatDateForICS = (date: string, time: string) => {
  return (
    new Date(`${date}T${time}:00`)
      .toISOString()
      .replace(/[-:]/g, "")
      .split(".")[0] + "Z"
  );
};

const EventModal = ({
  isOpen,
  onClose,
  title,
  date,
  startTime,
  endTime,
  location,
  description,
  status,
}: EventModalProps) => {
  if (!isOpen) return null;

  //   const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
  //     title
  //   )}&dates=${formatDateForICS(date, startTime)}/${formatDateForICS(
  //     date,
  //     endTime
  //   )}&details=${encodeURIComponent(description)}&location=${encodeURIComponent(
  //     location
  //   )}&sf=true&output=xml`;

  //   const appleCalendarUrl = `data:text/calendar;charset=utf8,BEGIN:VCALENDAR
  // VERSION:2.0
  // BEGIN:VEVENT
  // SUMMARY:${title}
  // DTSTART:${formatDateForICS(date, startTime)}
  // DTEND:${formatDateForICS(date, endTime)}
  // DESCRIPTION:${description}
  // LOCATION:${location}
  // END:VEVENT
  // END:VCALENDAR`;

  //   const outlookCalendarUrl = `https://outlook.live.com/calendar/0/deeplink/compose?subject=${encodeURIComponent(
  //     title
  //   )}&startdt=${formatDateForICS(date, startTime)}&enddt=${formatDateForICS(
  //     date,
  //     endTime
  //   )}&body=${encodeURIComponent(description)}&location=${encodeURIComponent(
  //     location
  //   )}`;

  //   const notionCalendarUrl = "https://notion.so"; // Placeholder; Notion requires API integration

  const addToGoogleCalendar = () => {
    console.log("Google Calendar: added!");
  };

  const addToIcloudCalendar = () => {
    console.log("iCloud Calendar: added!");
  };

  const addToOutlookCalendar = () => {
    console.log("Microsoft Outlook Calendar: added!");
  };

  const addToNotion = () => {
    console.log("Notion: added!");
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <span className={styles.closeButton} onClick={onClose}>
          &times;
        </span>

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

        {/* Add to Calendar Buttons */}
        <div className={styles.buttonContainer}>
          <div
            rel="noopener noreferrer"
            className={`${styles.calendarButton}`}
            onClick={addToGoogleCalendar}
          >
            <span style={{ display: "inline-flex" }}>
              Add to Google Calendar&nbsp;&nbsp;&nbsp;&nbsp;
              <img src="/googleCalender.png" style={{ height: "25px" }} />
            </span>
          </div>
          <div
            rel="noopener noreferrer"
            className={`${styles.calendarButton} `}
            onClick={addToIcloudCalendar}
          >
            <span style={{ display: "inline-flex" }}>
              Add to iCloud Calendar&nbsp;&nbsp;&nbsp;&nbsp;
              <img src="/appleCalendar.png" style={{ height: "25px" }} />
            </span>
          </div>
          <div
            rel="noopener noreferrer"
            className={`${styles.calendarButton}`}
            onClick={addToOutlookCalendar}
          >
            <span style={{ display: "inline-flex" }}>
              Add to Outlook Calendar&nbsp;&nbsp;&nbsp;&nbsp;
              <img src="/microsoftCalendar.png" style={{ height: "25px" }} />
            </span>
          </div>
          <div
            rel="noopener noreferrer"
            className={`${styles.calendarButton} `}
            onClick={addToNotion}
          >
            <span style={{ display: "inline-flex" }}>
              Add to Notion &nbsp;&nbsp;&nbsp;&nbsp;
              <img src="/notion.png" style={{ height: "25px" }} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventModal;
