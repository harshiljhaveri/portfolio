import React from "react";
import "./Education.css";

const Education = () => {
  return (
    <div className="education">
      <div className="edu">Education</div>
      <ul className="details" style={{ fontFamily: "Arial" }}>
        <li className="engg">
          <p style={{ fontWeight: "bold" }}>
            <span className="name">D. J. Sanghvi College of Engineering |</span>
            B.E. Computer Engineering
          </p>
          <p>2017-2021, Vile Parle</p>
          <p>Result: 8.725CGPA</p>
        </li>
        <li className="college">
          <p style={{ fontWeight: "bold" }}>
            <span className="name">Pace Junior Science College |</span> HSC
          </p>
          <p>2015-2017, Borivali</p>
          <p>Result: 82%</p>
        </li>
        <li className="school">
          <p style={{ fontWeight: "bold" }}>
            <span className="name">
              Swami Vivekanand International School |
            </span>{" "}
            SSC
          </p>
          <p>2002-2015, Borivali</p>
          <p>Result: 91.2%</p>
        </li>
      </ul>
    </div>
  );
};
export default Education;
