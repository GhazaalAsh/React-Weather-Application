import React from "react";

export default function FormattedDate(props) {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = days[props.date.getDay()];
  let Months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let Month = Months[props.date.getMonth()];
  let TheDate = props.date.getDate();
  let Hour = props.date.getHours();
  if (Hour < 10) {
    Hour = `0${Hour}`;
  }
  let Minutes = props.date.getMinutes();
  if (Minutes < 10) {
    Minutes = `0${Minutes}`;
  }
  return (
    <div className="FormattedDate">
      {day}, {Month} {TheDate}, {Hour}:{Minutes}
    </div>
  );
}
