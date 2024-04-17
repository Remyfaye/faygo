import React, { useEffect } from "react";
import "./style.css";
// import "./mixins.css";
// import "./vars.css";

/* eslint-disable no-undef */
const select = document.querySelectorAll(".selectBtn");
const option = document.querySelectorAll(".option");
let index = 1;
// let $;
select.forEach((a) => {
  a.addEventListener("click", (b) => {
    const next = b.target.nextElementSibling;
    next.classList?.toggle("toggle");
    next.style.zIndex = index++;

    // <div>hi</div>;
  });
});
option.forEach((a) => {
  a.addEventListener("click", (b) => {
    b.target.parentElement.classList.remove("toggle");
    const parent = b.target.closest(".select").children[0];

    parent.setAttribute("data-type", b.target.innerHTML);

    parent.innerHTML = b.target.innerHTML;
  });
});
// eslint-disable-next-line no-undef

const TicketForm = () => {
  useEffect(() => {
    const $ = () => () => {
      $("#sourcedatepicker").datepicker();
      $("#destinationdatepicker").datepicker();
    };

    $();
  }, []);
  return (
    <div class="container">
      <h3 class="getquotetext">Get Quote</h3>

      <div class="blocks">
        <div class="left">
          <div class="triptype">
            <button type="button" class="one-way-button">
              One-Way
            </button>
            <button type="button" class="round-trip-button">
              Round-Trip
            </button>
          </div>
          <p>From</p>
          {/* <select class="select">
            <option>enugu</option>
            <option>lagos</option>
            <option>calabar</option>
          </select> */}

          <div class="select">
            <div class="selectBtn" data-type="firstOption">
              <i class="fas fa-map-marker-alt"></i>lagos
            </div>
            <div class="selectDropdown">
              <div class="option" data-type="firstOption">
                <i class="fas fa-map-marker-alt"></i>calabar
              </div>
              <div class="option" data-type="secondOption">
                <i class="fas fa-map-marker-alt"></i>abuja
              </div>
              <div class="option" data-type="thirdOption">
                <i class="fas fa-map-marker-alt"></i>ekiti
              </div>
            </div>
          </div>
          <p>To</p>
          {/* <select className="selectContainer">
            <option>enugu</option>
            <option>lagos</option>
            <option>calabar</option>
          </select> */}

          <div class="select">
            <div class="selectBtn" data-type="firstOption">
              <i class="fas fa-map-marker-alt"></i>Enugu
            </div>
            <div class="selectDropdown">
              <div class="option" data-type="firstOption">
                <i class="fas fa-map-marker-alt"></i>kogi
              </div>
              <div class="option" data-type="secondOption">
                <i class="fas fa-map-marker-alt"></i>new york
              </div>
              <div class="option" data-type="thirdOption">
                <i class="fas fa-map-marker-alt"></i>paris
              </div>
            </div>
          </div>
          <p>Departure Date</p>
          <div class="date-input-container">
            <i class="fas fa-calendar-alt date-icon"></i>
            <input
              class="date-input-field "
              type="text"
              id="sourcedatepicker"
              placeholder="mm/dd/yyyy"
            />
          </div>
          <p>Arrival Date</p>
          <div class="date-input-container">
            <i class="fas fa-calendar-alt date-icon"></i>
            <input
              class="date-input-field"
              type="text"
              id="destinationdatepicker"
              placeholder="mm/dd/yyyy"
            />
          </div>
          <p>Passengers</p>
          <div class="select">
            <div class="selectBtn" data-type="firstOption">
              <i class="fas fa-user"></i>1 Adult, 2 Students
            </div>
            <div class="selectDropdown">
              <div class="option" data-type="firstOption">
                <i class="fas fa-user"></i>First option
              </div>
              <div class="option" data-type="secondOption">
                <i class="fas fa-user"></i>Second option
              </div>
              <div class="option" data-type="thirdOption">
                <i class="fas fa-user"></i>Third option
              </div>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="trip-detail-container">
            <div class="one-way-container">
              <h3 class="trip-detail-title">One-Way</h3>
              <table>
                <table>
                  <tr>
                    <td>From</td>
                    <td>Thunder Bay</td>
                  </tr>
                  <tr>
                    <td>To</td>
                    <td>Longlac</td>
                  </tr>
                  <tr>
                    <td>Transfers</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Departure</td>
                    <td>2021-08-28 18:00:00 ET</td>
                  </tr>
                  <tr>
                    <td>Arrival</td>
                    <td>2021-08-28 17:00:00 ET</td>
                  </tr>
                </table>
              </table>
            </div>
            <hr />
            <div class="two-way-container">
              <h3 class="trip-detail-title">Round-Trip</h3>
              <table>
                <tr>
                  <td>From</td>
                  <td>Thunder Bay</td>
                </tr>
                <tr>
                  <td>To</td>
                  <td>Longlac</td>
                </tr>
                <tr>
                  <td>Transfers</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>Departure</td>
                  <td>2021-08-28 18:00:00 ET</td>
                </tr>
                <tr>
                  <td>Arrival</td>
                  <td>2021-08-28 17:00:00 ET</td>
                </tr>
              </table>
            </div>
            <hr />
            <div class="price-container">
              <h3 class="trip-detail-title">Price</h3>
              <table>
                <tr>
                  <td>Base Price</td>
                  <td>CA $300</td>
                </tr>
                <tr>
                  <td>Tax</td>
                  <td>CA $30</td>
                </tr>
                <tr>
                  <td>Total Price</td>
                  <td>CA $330</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="buttons">
        <button type="button">Get Quote</button>
        <button type="button">Book Tickets</button>
      </div>
    </div>
  );
};

export default TicketForm;
