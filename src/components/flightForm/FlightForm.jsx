import React, { useState } from "react";
import "./flightForm.css";
import { Link } from "react-router-dom";
const FlightForm = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [isPoppup, setIsPoppup] = useState(false);
  const [hasChosenFlight, setHasChosenFlight] = useState(false);
  console.log(from);
  return (
    <div className="">
      {/* <p>Tours give you the opportunity to see a lot within a time frame</p> */}

      {!hasChosenFlight && (
        <>
          <p className="form_title">book a flight</p>
          <div className="form_container">
            <div className="drop_down">
              <div className="option">
                <p className="dropdown_btn_1"></p>
                {/* <p>One Way</p> */}
              </div>
              <div className="option">
                <p className="dropdown_btn"></p>
                {/* <p>Round Trip</p> */}
              </div>
              <div className="option">
                <p className="dropdown_btn"></p>
                {/* <p>Multi city</p> */}
              </div>
            </div>

            <form className="form">
              <div className="form_option">
                <p>Select Your Flight</p>
                <input
                  placeholder="from"
                  onChange={(e) => setFrom(e.target.value)}
                />
                <input
                  placeholder="to"
                  onChange={(e) => setTo(e.target.value)}
                />
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
            <div
              onClick={() => setHasChosenFlight(true)}
              className="submit_btn"
              type="submit"
            >
              search flight
            </div>
          </div>
        </>
      )}

      {hasChosenFlight && !isPoppup && (
        <div>
          {/* top */}
          <div className="flight-top">
            {/* label 1 */}
            <div className="top-option">
              <p>cheapest</p>
              <small>N 153, 500</small>
            </div>
            {/* label 2 */}
            <div className="top-option">
              <p>best</p>
              <small>N 183,500</small>
            </div>
            {/* label 3 */}
            <div className="top-option">
              <p>Quickest</p>
              <small>N 213,500</small>
            </div>
            {/* label 4 */}
            {/* <div className="top-option">
              <p> sort</p>
            </div> */}
          </div>

          {/* bottom */}
          <div className="media-screen">
            <div className="fight-deals">
              <div className="bottom-toggle">
                <p>Best</p>
                <p>cheapest</p>
              </div>

              {/* main */}
              <div>
                <div className="bottom-main">
                  <div>
                    <p>20:35</p>
                    <p>{from.slice(0, 3)}</p>
                  </div>
                  <div>
                    <p className="line"></p>
                    <p className="">1h 20m</p>
                  </div>
                  <div>
                    <p>21:25</p>
                    <p>{to.slice(0, 3)}</p>
                  </div>
                </div>

                {/* main option 2 */}
                <div className="bottom-main">
                  <div>
                    <p>20:35</p>
                    <p>{to.slice(0, 3)}</p>
                  </div>
                  <div>
                    <p className="line"></p>
                    <p className="">1h 20m</p>
                  </div>
                  <div>
                    <p>21:25</p>
                    <p>{from.slice(0, 3)}</p>
                  </div>
                </div>
              </div>

              {/* price */}
              <div className="price-section">
                <p>price</p>
                <h3>N153,334</h3>
              </div>
              {/* view deal button */}
              <div onClick={() => setIsPoppup(true)} className="deal-btn">
                select deal
              </div>
            </div>

            {/* bottom 2*/}
            <div className="fight-deals">
              <div className="bottom-toggle">
                <p>Best</p>
                <p>cheapest</p>
              </div>

              {/* main */}
              <div>
                <div className="bottom-main">
                  <div>
                    <p>20:35</p>
                    <p>{from.slice(0, 3)}</p>
                  </div>
                  <div>
                    <p className="line"></p>
                    <p className="">1h 20m</p>
                  </div>
                  <div>
                    <p>21:25</p>
                    <p>{to.slice(0, 3)}</p>
                  </div>
                </div>

                {/* main option 2 */}
                <div className="bottom-main">
                  <div>
                    <p>20:35</p>
                    <p>{to.slice(0, 3)}</p>
                  </div>
                  <div>
                    <p className="line"></p>
                    <p className="">1h 20m</p>
                  </div>
                  <div>
                    <p>21:25</p>
                    <p>{from.slice(0, 3)}</p>
                  </div>
                </div>
              </div>

              {/* price */}
              <div className="price-section">
                <p>price</p>
                <h3>N213,500</h3>
              </div>
              {/* view deal button */}
              <div onClick={() => setIsPoppup(true)} className="deal-btn">
                select deal
              </div>
            </div>

            {/* bottom 3*/}
            <div className="fight-deals">
              <div className="bottom-toggle">
                <p>Best</p>
                <p>cheapest</p>
              </div>

              {/* main */}
              <div>
                <div className="bottom-main">
                  <div>
                    <p>20:35</p>
                    <p>{from.slice(0, 3)}</p>
                  </div>
                  <div>
                    <p className="line"></p>
                    <p className="">1h 20m</p>
                  </div>
                  <div>
                    <p>21:25</p>
                    <p>{to.slice(0, 3)}</p>
                  </div>
                </div>

                {/* main option 2 */}
                <div className="bottom-main">
                  <div>
                    <p>20:35</p>
                    <p>{to.slice(0, 3)}</p>
                  </div>
                  <div>
                    <p className="line"></p>
                    <p className="">1h 20m</p>
                  </div>
                  <div>
                    <p>21:25</p>
                    <p>{from.slice(0, 3)}</p>
                  </div>
                </div>
              </div>

              {/* price */}
              <div className="price-section">
                <p>price</p>
                <h3>N183,500</h3>
              </div>
              {/* view deal button */}
              <div onClick={() => setIsPoppup(true)} className="deal-btn">
                select deal
              </div>
            </div>
          </div>
        </div>
      )}

      {isPoppup && (
        <div className="pop">
          <p>Sucess!!!</p>
          <h4>you have sucessfully booked a flight</h4>
          <div
            className="deal-btn"
            onClick={() => (setHasChosenFlight(false), setIsPoppup(false))}
          >
            ok
          </div>
        </div>
      )}
    </div>
  );
};

export default FlightForm;
