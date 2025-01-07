import React from "react";

/*
  Biology = "Biology",
  Chemistry = "Chemistry",
  Physics = "Physics",
  Engineering = "Engineering",
  Women_In_STEM = "Women in STEM",
  Data_Science = "Data Science",
*/

interface CalendarProps {
  department: string;
}

const Calendar = ({ department }: CalendarProps) => {
  switch (department) {
    case "biology":
      // biology department calendar
      return (
        <div>
          <iframe
            src="https://calendar.google.com/calendar/embed?src=8920471b28575cc1e306491d9b28d8f3ceec8b364ba109146aba0dd7761d772b%40group.calendar.google.com&ctz=America%2FToronto"
            style={{ border: 0 }}
            width={800}
            height={600}
          ></iframe>
        </div>
      );
    case "chemistry":
      // chemistry department calendar
      return (
        <div>
          <iframe
            src="https://calendar.google.com/calendar/embed?src=8920471b28575cc1e306491d9b28d8f3ceec8b364ba109146aba0dd7761d772b%40group.calendar.google.com&ctz=America%2FToronto"
            style={{ border: 0 }}
            width={800}
            height={600}
          ></iframe>
        </div>
      );
    case "physics":
      // physics department calendar
      return (
        <div>
          <iframe
            src="https://calendar.google.com/calendar/embed?src=8920471b28575cc1e306491d9b28d8f3ceec8b364ba109146aba0dd7761d772b%40group.calendar.google.com&ctz=America%2FToronto"
            style={{ border: 0 }}
            width={800}
            height={600}
          ></iframe>
        </div>
      );
    case "engineering":
      // engineering department calendar
      return (
        <div>
          <iframe
            src="https://calendar.google.com/calendar/embed?src=8920471b28575cc1e306491d9b28d8f3ceec8b364ba109146aba0dd7761d772b%40group.calendar.google.com&ctz=America%2FToronto"
            style={{ border: 0 }}
            width={800}
            height={600}
          ></iframe>
        </div>
      );
    case "women in stem":
      return (
        <div>
          <iframe
            src="https://calendar.google.com/calendar/embed?src=8920471b28575cc1e306491d9b28d8f3ceec8b364ba109146aba0dd7761d772b%40group.calendar.google.com&ctz=America%2FToronto"
            style={{ border: 0 }}
            width={800}
            height={600}
          ></iframe>
        </div>
      );
    case "data science":
      return (
        <div>
          <iframe
            src="https://calendar.google.com/calendar/embed?src=8920471b28575cc1e306491d9b28d8f3ceec8b364ba109146aba0dd7761d772b%40group.calendar.google.com&ctz=America%2FToronto"
            style={{ border: 0 }}
            width={800}
            height={600}
          ></iframe>
        </div>
      );
    default:
      return (
        <div>
          <iframe
            src="https://calendar.google.com/calendar/embed?src=8920471b28575cc1e306491d9b28d8f3ceec8b364ba109146aba0dd7761d772b%40group.calendar.google.com&ctz=America%2FToronto"
            style={{ border: 0 }}
            width={800}
            height={600}
          ></iframe>
        </div>
      );
  }
};

export default Calendar;
