import React from "react";

const Flight = () => {
  return (
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
        <div className="top-option">
          <p> sort</p>
        </div>
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
                <p>PHC</p>
              </div>
              <div>
                <p className="line"></p>
                <p className="">1h 20m</p>
              </div>
              <div>
                <p>21:25</p>
                <p>LOS</p>
              </div>
            </div>

            {/* main option 2 */}
            <div className="bottom-main">
              <div>
                <p>20:35</p>
                <p>LOS</p>
              </div>
              <div>
                <p className="line"></p>
                <p className="">1h 20m</p>
              </div>
              <div>
                <p>21:25</p>
                <p>PHC</p>
              </div>
            </div>
          </div>

          {/* price */}
          <div className="price-section">
            <p>price</p>
            <h3>N153,334</h3>
          </div>
          {/* view deal button */}
          <div className="deal-btn">view deal</div>
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
                <p>PHC</p>
              </div>
              <div>
                <p className="line"></p>
                <p className="">1h 20m</p>
              </div>
              <div>
                <p>21:25</p>
                <p>LOS</p>
              </div>
            </div>

            {/* main option 2 */}
            <div className="bottom-main">
              <div>
                <p>20:35</p>
                <p>LOS</p>
              </div>
              <div>
                <p className="line"></p>
                <p className="">1h 20m</p>
              </div>
              <div>
                <p>21:25</p>
                <p>PHC</p>
              </div>
            </div>
          </div>

          {/* price */}
          <div className="price-section">
            <p>price</p>
            <h3>N213,500</h3>
          </div>
          {/* view deal button */}
          <div className="deal-btn">view deal</div>
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
                <p>PHC</p>
              </div>
              <div>
                <p className="line"></p>
                <p className="">1h 20m</p>
              </div>
              <div>
                <p>21:25</p>
                <p>LOS</p>
              </div>
            </div>

            {/* main option 2 */}
            <div className="bottom-main">
              <div>
                <p>20:35</p>
                <p>LOS</p>
              </div>
              <div>
                <p className="line"></p>
                <p className="">1h 20m</p>
              </div>
              <div>
                <p>21:25</p>
                <p>PHC</p>
              </div>
            </div>
          </div>

          {/* price */}
          <div className="price-section">
            <p>price</p>
            <h3>N183,500</h3>
          </div>
          {/* view deal button */}
          <div className="deal-btn">view deal</div>
        </div>
      </div>
    </div>
  );
};

export default Flight;
