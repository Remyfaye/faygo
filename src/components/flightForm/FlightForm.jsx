import React from "react";
import "./flightForm.css";
const FlightForm = () => {
  return (
    <div className="">
      <p className="form_title">book a flight</p>
      {/* <p>Tours give you the opportunity to see a lot within a time frame</p> */}
      <div className="form_container">
        <div className="drop_down">
          <div className="option">
            <p className="dropdown_btn_1"></p>
            <p>One Way</p>
          </div>
          <div className="option">
            <p className="dropdown_btn"></p>
            <p>Round Trip</p>
          </div>
          <div className="option">
            <p className="dropdown_btn"></p>
            <p>Multi city</p>
          </div>
        </div>

        <form className="form">
          <div className="form_option">
            <p>Select Your Flight</p>
            <input placeholder="select departure flight" />
            <input placeholder="select arival flight" />
          </div>

          <div className="form_option">
            <p>Select Your date</p>

            <input placeholder="select departure date"></input>
            <input placeholder="select return date" />
          </div>

          <div className="form_option">
            <p>Select Your passenger</p>
            <select placeholder="select departure flight">
              <option placeholder="select arival flight">1 Adult</option>
              <option placeholder="select arival flight">Child</option>
              <option placeholder="select arival flight">infant</option>
            </select>
          </div>
        </form>
        <button className="submit_btn" type="submit">
          search flight
        </button>
      </div>
    </div>
  );
};

export default FlightForm;
