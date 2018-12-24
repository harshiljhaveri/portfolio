import React from "react";
import Profile from "./profile.jpg";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div style={{ height: "182px" }}>
        <img src={Profile} width="175px" height="175px" className="image" />
        <h1 className="name">Dhairya C Shah</h1>
        <h3>2nd Year Computer Engineering Student</h3>
      </div>
      <div className="contactdetails">
        <div className="contact">
          <i className="fas fa-phone" style={{ marginRight: "8px" }} />
          +919619861415
        </div>
        <div className="email">
          <i className="fas fa-envelope" style={{ marginRight: "8px" }} />
          shahdhairya171099@gmail.com
        </div>
        <a href="https://github.com/dhairya1415" className="github">
          <i className="fab fa-github" style={{ marginRight: "8px" }} />
          dhairya1415
        </a>
        <a
          href="https://www.linkedin.com/in/dhairya-shah-3153a7151/"
          className="linkedin"
        >
          <i className="fab fa-linkedin-in" style={{ marginRight: "8px" }} />
          Dhairya Shah
        </a>
      </div>
    </div>
  );
};
export default Header;
