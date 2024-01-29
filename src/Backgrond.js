import React from "react";
import moment from "moment";
import "./Background.css";

export default function Backgrond() {
  const getTimeBasedBackground = () => {
    const currentTime = moment().format("HH:mm");
    const morningStart = moment("06:00", "HH:mm");
    const afternoonStart = moment("12:00", "HH:mm");
    const eveningStart = moment("18:00", "HH:mm");
    const nightStart = moment("00:00", "HH:mm");

    if (moment(currentTime, "HH:mm").isBetween(morningStart, afternoonStart)) {
      return "morning-background";
    } else if (
      moment(currentTime, "HH:mm").isBetween(afternoonStart, eveningStart)
    ) {
      return "afternoon-background";
    } else if (
      moment(currentTime, "HH:mm").isBetween(eveningStart, nightStart)
    ) {
      return "evening-background";
    } else {
      return "night-background";
    }
  };

  const backgroundClass = getTimeBasedBackground();

  return <div className={`container ${backgroundClass}`}></div>;
}
