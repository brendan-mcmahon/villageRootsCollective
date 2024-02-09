const calendarId = encodeURIComponent("fa848fe1d111aa2b8667e945a195e1f01a5ea78bfa6470ec060149e94af8ee40@group.calendar.google.com");
const API_KEY = "AIzaSyDxXl-IIfNs8Q5HzUAxgqV5OLVFNowVVE8";

import { useEffect, useState } from "react";

const Calendar = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(`https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${API_KEY}`);

        const data = await response.json();
        setEvents(data.items);
        console.log(data.items);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div id="calendar-page">
      {/* <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FNew_York&bgcolor=%23ffffff&showTitle=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0&src=ZmE4NDhmZTFkMTExYWEyYjg2NjdlOTQ1YTE5NWUxZjAxYTVlYTc4YmZhNjQ3MGVjMDYwMTQ5ZTk0YWY4ZWU0MEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%238E24AA" style={{borderWidth:0}} width="800" height="600" frameBorder="0" scrolling="no"></iframe> */}
      {events.map((event) => (
        <div key={event.id}>
          <h2>{event.summary}</h2>
          <p>{event.start.date}</p>
          <p>{event.end.dateTime}</p>
          <p>{event.description}</p>
          <pre>{JSON.stringify(event)}</pre>
        </div>
      ))}
    </div>
  );
};

export default Calendar;
