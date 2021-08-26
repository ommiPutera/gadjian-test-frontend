import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUsers,
  faCalendarAlt,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { Switch, Route, Link } from "react-router-dom";
import PersonnelList from "./pages/PersonnelList";
import Beranda from "./pages/Beranda";
import DailyAttendance from "./pages/DailyAttendance";
import Logo from "./assets/gadjian-logo.png";
import "./App.css";

function App() {
  const [open, setOpen] = useState(false);

  const openBar = () => {
    setOpen(true);
  };
  const closeBar = () => {
    setOpen(false);
  };

  return (
    <div className="app-container">

      <div className={`left-container ${open ? "open" : "close"}`}>
        <div className="close-and-logo-div">
          <img src={Logo} alt="logo" className="logo" />
          <FontAwesomeIcon
            icon={faTimes}
            className="close-icon"
            onClick={closeBar}
          />
        </div>

        <Link to="/beranda" className="link">
          <div className="navigation">
            <FontAwesomeIcon icon={faHome} />
            <p>Beranda</p>
          </div>
        </Link>
        <Link to="/" className="link">
          <div className="navigation">
            <FontAwesomeIcon icon={faUsers} />
            <p>Personnel List</p>
          </div>
        </Link>
        <Link to="/daily-attendance" className="link">
          <div className="navigation calendar">
            <FontAwesomeIcon icon={faCalendarAlt} />
            <p>Daily Attendance</p>
          </div>
        </Link>
      </div>
      
      <div className="right-container">
        <Switch>
          <Route path="/" exact>
            <PersonnelList onCliCkBtn={openBar} />
          </Route>
          <Route path="/beranda" exact>
            <Beranda onCliCkBtn={openBar} />
          </Route>
          <Route path="/daily-attendance" exact>
            <DailyAttendance onCliCkBtn={openBar} />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
