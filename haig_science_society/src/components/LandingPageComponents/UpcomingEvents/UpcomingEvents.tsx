import React from "react";

interface Event {
  title: string;
  date: string;
  time: string;
  location: string;
  signUpInfo: string;
}

const events: Event[] = [
  {
    title: "Science Society Trivia",
    date: "Wednesday, December 3rd",
    time: "11:50 AM - 12:30 PM",
    location: "Room 353",
    signUpInfo: "Ticket sales at lunch in the mail hall starting Nov 24",
  },
  {
    title: "Paper Airplane Challenge 2.0",
    date: "Monday, December 15th",
    time: "11:40 AM to 12:40 PM",
    location: "Room 353",
    signUpInfo:
      "It's a small meeting and it's open to drop-ins. More info about it can be found in the Science Society GM GC code: qfz72fa.",
  },
  {
    title: "Scientific Illustration Workshop",
    date: "Thursday, December 18th",
    time: "11:45 AM to 12:35 PM",
    location: "Room 353",
    signUpInfo:
      "https://forms.gle/64ixL5BMJdStzpfTA   More information about it can be found in the Science Society google classroom code: qfz72fa",
  },
  {
    title: "Science Fair Workshops",
    date: "Biweekly",
    time: `11:45 AM to 12:35 PM`,
    location: "Room 353",
    signUpInfo:
      "Biweekly workshops to help you refine your science fair project ideas. Check Google Classroom for specific dates and times.",
  },
  {
    title: "Earl Haig (In-School) Science Fair",
    date: "Thursday, February 20th, 2026",
    time: "February 20, 2026",
    location: "Room 353",
    signUpInfo:
      "In-school science fair to select projects for the Toronto Science Fair. More information available in Google Classroom.",
  },
];

const UpcomingEvents = () => {
  return (
    <div className="space-y-4">
      {events.map((event, index) => (
        <div
          key={index}
          className="border-l-4 border-gray-500 pl-4 py-3 bg-gradient-to-r from-gray-50 to-transparent rounded-r-lg"
        >
          <h4 className="text-xl font-bold text-gray-800 mb-2">
            {event.title}
          </h4>

          <div className="space-y-1.5 text-sm text-gray-700">
            <p className="flex items-start">
              <span className="font-semibold min-w-[70px] text-gray-600">
                Date:
              </span>
              <span>{event.date}</span>
            </p>

            <p className="flex items-start">
              <span className="font-semibold min-w-[70px] text-gray-600">
                Time:
              </span>
              <span>{event.time}</span>
            </p>

            <p className="flex items-start">
              <span className="font-semibold min-w-[70px] text-gray-600">
                Location:
              </span>
              <span>{event.location}</span>
            </p>

            {/* <div className="flex items-start">
              <span className="font-semibold min-w-[70px] text-gray-600">
                Contact:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {event.contactEmails.map((email, emailIndex) => (
                  <a
                    key={emailIndex}
                    href={`mailto:${email}`}
                    className="text-blue-600 hover:text-blue-800 underline text-xs"
                  >
                    {email}
                  </a>
                ))}
              </div>
            </div> */}

            {/* <div className="flex items-start">
              <span className="font-semibold min-w-[70px] text-gray-600">
                Supervisor:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {event.staffSupervisorEmails.map((email, emailIndex) => (
                  <a
                    key={emailIndex}
                    href={`mailto:${email}`}
                    className="text-blue-600 hover:text-blue-800 underline text-xs"
                  >
                    {email}
                  </a>
                ))}
              </div>
            </div> */}

            <div className="flex items-start">
              <span className="font-semibold min-w-[70px] text-gray-600">
                Sign-up:
              </span>
              <div className="flex-1 text-xs">
                {event.signUpInfo.includes("http") ? (
                  <span>
                    {event.signUpInfo
                      .split(/(https?:\/\/[^\s]+)/g)
                      .map((part, i) =>
                        part.match(/^https?:\/\//) ? (
                          <a
                            key={i}
                            href={part}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 underline break-all"
                          >
                            {part}
                          </a>
                        ) : (
                          <span key={i}>{part}</span>
                        )
                      )}
                  </span>
                ) : (
                  <span>{event.signUpInfo}</span>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingEvents;
