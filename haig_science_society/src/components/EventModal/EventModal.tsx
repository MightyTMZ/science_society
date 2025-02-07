import React from "react";
import styles from "./EventModal.module.css";
import Link from "next/link"; // better for Google Calendar
import { MdOutlineDateRange } from "react-icons/md";
import { IoTime } from "react-icons/io5";
import { FaSearchLocation } from "react-icons/fa";
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
  status: string;
}

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

  const generateGoogleCalendarUrl = (event: EventModalProps) => {
    const startDate = new Date(`${event.date}T${event.startTime}`);
    const endDate = new Date(`${event.date}T${event.endTime}`);

    const params = new URLSearchParams({
      action: "TEMPLATE",
      text: event.title,
      details: event.description,
      location: event.location,
      dates: `${startDate.toISOString().replace(/-|:|\.\d+/g, "")}/${endDate
        .toISOString()
        .replace(/-|:|\.\d+/g, "")}`,
    });

    return `https://calendar.google.com/calendar/render?${params.toString()}`;
  };

  const generateOutlookCalendarUrl = (event: EventModalProps) => {
    const startDate = new Date(`${event.date}T${event.startTime}`);
    const endDate = new Date(`${event.date}T${event.endTime}`);

    const params = new URLSearchParams({
      rru: "addevent",
      subject: event.title,
      body: event.description,
      location: event.location,
      startdt: startDate.toISOString(),
      enddt: endDate.toISOString(),
    });

    return `https://outlook.live.com/calendar/0/deeplink/compose?${params.toString()}`;
  };

  const generateIcsFileContent = (event: EventModalProps) => {
    const startDate = new Date(`${event.date}T${event.startTime}`);
    const endDate = new Date(`${event.date}T${event.endTime}`);

    return `BEGIN:VCALENDAR
  VERSION:2.0
  BEGIN:VEVENT
  SUMMARY:${event.title}
  DESCRIPTION:${event.description}
  LOCATION:${event.location}
  DTSTART:${startDate.toISOString().replace(/-|:|\.\d+/g, "")}
  DTEND:${endDate.toISOString().replace(/-|:|\.\d+/g, "")}
  END:VEVENT
  END:VCALENDAR`;
  };

  const downloadIcsFile = (event: EventModalProps) => {
    const icsContent = generateIcsFileContent(event);
    const blob = new Blob([icsContent], {
      type: "text/calendar;charset=utf-8",
    });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${event.title.toLowerCase().replace(/\s+/g, "-")}.ics`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const googleCalendarUrl = generateGoogleCalendarUrl({
    isOpen,
    onClose,
    title,
    date,
    startTime,
    endTime,
    location,
    description,
    status,
  });

  const outlookCalendarUrl = generateOutlookCalendarUrl({
    isOpen,
    onClose,
    title,
    date,
    startTime,
    endTime,
    location,
    description,
    status,
  });

  function formatDate(dateString: string) {
    const date = new Date(dateString); // Convert the string to a Date object

    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "Asia/Kolkata",
    };

    const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
      date
    );
    return formattedDate;
  }

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <span className={styles.closeButton} onClick={onClose}>
          &times;
        </span>

        <h2 className={styles.eventTitle}>{title}</h2>
        <br />
        <p>
          <strong className={styles.eventAttribute}>
            Date &nbsp;
            <MdOutlineDateRange />
            &nbsp;
          </strong>{" "}
          {formatDate(date)}
        </p>
        <p>
          <strong className={styles.eventAttribute}>
            Time &nbsp;
            <IoTime />
            &nbsp;
          </strong>{" "}
          {startTime} - {endTime}
        </p>
        <p>
          <strong className={styles.eventAttribute}>
            Location &nbsp;
            <FaSearchLocation />
            &nbsp;
          </strong>{" "}
          {location}
        </p>
        <p>
          <strong style={{ display: "block" }}>Description</strong>
          {description}
        </p>
        <br />
        <p className={`${styles.status} ${styles[status.toLowerCase()]}`}>
          {status}
        </p>

        {/* Add to Calendar Buttons */}
        <div className={styles.buttonContainer}>
          <Link
            href={googleCalendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.calendarButton}
          >
            <span style={{ display: "inline-flex" }}>
              Add to Google Calendar&nbsp;&nbsp;&nbsp;&nbsp;
              <img src="/googleCalender.png" style={{ height: "25px" }} />
            </span>
          </Link>
          <div
            className={styles.calendarButton}
            onClick={() =>
              downloadIcsFile({
                isOpen,
                onClose,
                title,
                date,
                startTime,
                endTime,
                location,
                description,
                status,
              })
            }
          >
            <span style={{ display: "inline-flex" }}>
              Add to iCloud Calendar&nbsp;&nbsp;&nbsp;&nbsp;
              <img src="/appleCalendar.png" style={{ height: "25px" }} />
            </span>
          </div>
          <Link
            href={outlookCalendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.calendarButton}
          >
            <span style={{ display: "inline-flex" }}>
              Add to Outlook Calendar&nbsp;&nbsp;&nbsp;&nbsp;
              <img src="/microsoftCalendar.png" style={{ height: "25px" }} />
            </span>
          </Link>
          <Link
            href="https://notion.so"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.calendarButton}
          >
            <span style={{ display: "inline-flex" }}>
              Add to Notion &nbsp;&nbsp;&nbsp;&nbsp;
              <img src="/notion.png" style={{ height: "25px" }} />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventModal;
