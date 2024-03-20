import React from "react";
import "./resentTrips.css";
import { Link } from "react-router-dom";

function TripData(props) {
  return (
    <div className="t-card">
      <div className="t-image">
        <img alt="t-img" src={props.image} />
      </div>
      <Link className="link" to="/service">
        {props.heading}
      </Link>
      <p>{props.text}</p>
    </div>
  );
}

export default TripData;
