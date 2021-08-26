import React from "react";
import Header from "../components/Header";
import "./style/dailyAttendance.css";

const DailyAttendance = (props) => {
  return (
    <>
      <Header onCliCkBtn={props.onCliCkBtn} />
      <div className="container">
        <div className="daily-attendance-container">
          <h1>Daily Attendance</h1>
        </div>
      </div>
    </>
  );
};

export default DailyAttendance;
