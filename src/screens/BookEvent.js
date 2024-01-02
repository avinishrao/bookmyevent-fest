import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../image/bookmyevent.png";

export default function BookEvent() {
  const navigate = useNavigate();
  const [minDate] = useState("2024-01-01");
  const [maxDate] = useState("2024-01-08");
  const [activeButton, setActiveButton] = useState(null);
  const [isSvgActive, setIsSvgActive] = useState(null);

  const handleButtonClick = (index) => {
    setActiveButton(index);
  };
  const handleDateChange = (event) => {
    // setMinDate(event.target.value);
    // setMaxDate(event.target.value);
  };

  const handleLogout = async () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };

  const handleSvgClick = (index) => {
    setIsSvgActive(index);
  };

  return (
    <div class="container">
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <Link class="navbar-brand" to="/">
              <img height="25" src={logo} alt="..." />
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            {!localStorage.getItem("authToken") ? (
              <div class="d-flex">
                <Link class="btn bg-danger text-white mx-1" to="/login">
                  Sign in
                </Link>

                <Link class="btn bg-danger text-white mx-1" to="/createuser">
                  Register
                </Link>
              </div>
            ) : (
              <div class="d-flex">
                <Link class="btn bg-danger text-white mx-1" to="/mybookings">
                  My Bookings
                </Link>
                <div class="btn btn-outline-danger mx-2" onClick={handleLogout}>
                  Logout
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>

      <div className="cardDiv-grid container-fluid d-flex justify-content-center mt-5">
        <div className="TicketsInput mx-5">
          {" "}
          <label htmlFor="ticket">How many seats?</label>
          <div className="input flex">
            <select class="seatnumberselect mx-1">
              {Array.from(Array(10), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>

            <select class="seatselect mx-1">
              <option value="1">Silver</option>
              <option value="2">Gold</option>
              <option value="3">Platinum</option>
            </select>

            <div className="">
              Max. 10 seats can be <br /> selected
            </div>
          </div>
        </div>

        <div class="dateInput mx-5">
          <label htmlFor="city">Choose your date:</label>
          <div class="input flex">
            <input
              type="date"
              value={minDate}
              min={minDate}
              max={maxDate}
              onChange={handleDateChange}
            />
          </div>
        </div>

        <div class="btn-drpdwn mx-5">
          <label htmlFor="city">Choose your Time slot:</label>
          <div class="button flex">
            <button
              type="button"
              className={`time-btn btn btn-outline-warning mx-3 ${
                activeButton === 0 ? "active" : ""
              }`}
              onClick={() => handleButtonClick(0)}
            >
              <span className={activeButton === 0 ? "active-text" : ""}>
                8:30 AM
              </span>
            </button>
            <button
              type="button"
              className={`time-btn btn btn-outline-warning mx-3 ${
                activeButton === 1 ? "active" : ""
              }`}
              onClick={() => handleButtonClick(1)}
            >
              <span className={activeButton === 1 ? "active-text" : ""}>
                1:00 PM
              </span>
            </button>
            <button
              type="button"
              className={`time-btn btn btn-outline-warning mx-3 ${
                activeButton === 2 ? "active" : ""
              }`}
              onClick={() => handleButtonClick(2)}
            >
              <span className={activeButton === 2 ? "active-text" : ""}>
                6:00 PM
              </span>
            </button>
          </div>
        </div>
      </div>

      <div class="cardDiv-grid container-fluid d-flex justify-content-center mt-10 mb-100">
        <div class="d-flex ">
          <Link>
            <svg
              className={`mx-5 ${isSvgActive === 0 ? "active" : ""}`}
              height="300"
              viewBox="0 0 750 471"
              width="400"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => handleSvgClick(0)}
            >
              <g fill="none">
                <rect fill="#000" height="471" rx="40" width="750" />
                <g transform="translate(133 48)">
                  <path
                    d="m88.13 373.67v-24.85c0-9.53-5.8-15.74-15.32-15.74-5 0-10.35 1.66-14.08 7-2.9-4.56-7-7-13.25-7-4.7200851-.203992-9.2274663 1.974575-12 5.8v-5h-7.87v39.76h7.87v-22.75c0-7 4.14-10.35 9.94-10.35s9.11 3.73 9.11 10.35v22.78h7.87v-22.78c0-7 4.14-10.35 9.94-10.35s9.11 3.73 9.11 10.35v22.78zm129.22-39.35h-14.5v-12h-7.85v12h-8.28v7h8.28v18.68c0 9.11 3.31 14.5 13.25 14.5 3.765784-.078517 7.455651-1.073923 10.75-2.9l-2.49-7c-2.234315 1.396557-4.825525 2.115565-7.46 2.07-4.14 0-6.21-2.49-6.21-6.63v-19.04h14.5v-6.63zm73.72-1.24c-4.360645-.097154-8.451164 2.105726-10.77 5.8v-5h-7.87v39.76h7.87v-22.33c0-6.63 3.31-10.77 8.7-10.77 1.818809.073783 3.62352.352205 5.38.83l2.49-7.46c-1.898987-.47874-3.84296-.756929-5.8-.83zm-111.41 4.14c-4.14-2.9-9.94-4.14-16.15-4.14-9.94 0-16.15 4.56-16.15 12.43 0 6.63 4.56 10.35 13.25 11.6l4.14.41c4.56.83 7.46 2.49 7.46 4.56 0 2.9-3.31 5-9.53 5-4.749373.097716-9.401111-1.355733-13.25-4.14l-4.14 6.21c5.8 4.14 12.84 5 17 5 11.6 0 17.81-5.38 17.81-12.84 0-7-5-10.35-13.67-11.6l-4.14-.41c-3.73-.41-7-1.66-7-4.14 0-2.9 3.31-5 7.87-5 5 0 9.94 2.07 12.43 3.31zm120.11 16.57c0 12 7.87 20.71 20.71 20.71 5.8 0 9.94-1.24 14.08-4.56l-4.14-6.21c-2.931242 2.37388-6.578297 3.68823-10.35 3.73-7 0-12.43-5.38-12.43-13.25s5.36-13.21 12.43-13.21c3.771703.04177 7.418758 1.35612 10.35 3.73l4.14-6.21c-4.14-3.31-8.28-4.56-14.08-4.56-12.43-.83-20.71 7.87-20.71 19.88zm-55.5-20.71c-11.6 0-19.47 8.28-19.47 20.71s8.28 20.71 20.29 20.71c5.842775.123408 11.548486-1.777318 16.15-5.38l-4.14-5.8c-3.327868 2.578743-7.391402 4.029004-11.6 4.14-5.38 0-11.18-3.31-12-10.35h29.41v-3.31c0-12.43-7.46-20.71-18.64-20.71zm-.41 7.46c5.8 0 9.94 3.73 10.35 9.94h-21.53c1.24-5.8 5-9.94 11.18-9.94zm-107.27 13.25v-19.88h-7.87v5c-2.9-3.73-7-5.8-12.84-5.8-11.18 0-19.47 8.7-19.47 20.71s8.28 20.71 19.47 20.71c5.8 0 9.94-2.07 12.84-5.8v5h7.87zm-31.89 0c0-7.46 4.56-13.25 12.43-13.25 7.46 0 12 5.8 12 13.25 0 7.87-5 13.25-12 13.25-7.87.41-12.43-5.8-12.43-13.25zm306.08-20.71c-4.360645-.097154-8.451164 2.105726-10.77 5.8v-5h-7.87v39.76h7.86v-22.33c0-6.63 3.31-10.77 8.7-10.77 1.818809.073783 3.62352.352205 5.38.83l2.49-7.46c-1.898987-.47874-3.84296-.756929-5.8-.83zm-30.65 20.71v-19.88h-7.87v5c-2.9-3.73-7-5.8-12.84-5.8-11.18 0-19.47 8.7-19.47 20.71s8.28 20.71 19.47 20.71c5.8 0 9.94-2.07 12.84-5.8v5h7.87zm-31.89 0c0-7.46 4.56-13.25 12.43-13.25 7.46 0 12 5.8 12 13.25 0 7.87-5 13.25-12 13.25-7.87.41-12.43-5.8-12.43-13.25zm111.83 0v-35.62h-7.87v20.71c-2.9-3.73-7-5.8-12.84-5.8-11.18 0-19.47 8.7-19.47 20.71s8.28 20.71 19.47 20.71c5.8 0 9.94-2.07 12.84-5.8v5h7.87zm-31.89 0c0-7.46 4.56-13.25 12.43-13.25 7.46 0 12 5.8 12 13.25 0 7.87-5 13.25-12 13.25-7.88.42-12.44-5.79-12.44-13.25z"
                    fill="#fff"
                  />
                  <path
                    d="m170.55 32.39h143.72v234.42h-143.72z"
                    fill="#ff5f00"
                  />
                  <path
                    d="m185.05 149.6c.00997-45.687446 20.91046-88.8623915 56.74-117.21-61.127982-48.0613968-148.9279963-41.07523415-201.686538 16.0480037-52.7585416 57.1232373-52.7585416 145.2007553 0 202.3239923 52.7585417 57.123238 140.558556 64.109401 201.686538 16.048004-35.82954-28.347609-56.73003-71.522554-56.74-117.21z"
                    fill="#eb001b"
                  />
                  <path
                    d="m483.26 149.6c.04134 57.046679-32.503211 109.106022-83.804383 134.056273-51.301172 24.95025-112.346436 18.408178-157.195617-16.846273 35.838424-28.34064 56.741593-71.519908 56.741593-117.21s-20.903169-88.8693598-56.741593-117.21c44.849181-35.25445052 105.894445-41.79652324 157.195617-16.8462726 51.301172 24.9502506 83.845723 77.0095937 83.804383 134.0562726z"
                    fill="#f79e1b"
                  />
                </g>
              </g>
            </svg>
          </Link>
          <Link>
            <svg
              className={`mx-5 ${isSvgActive === 1 ? "active" : ""}`}
              height="300"
              width="380"
              viewBox="0 0 36 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => handleSvgClick(1)}
            >
              <path d="m33.6 24h-31.2c-1.325 0-2.4-1.075-2.4-2.4v-19.2c0-1.325 1.075-2.4 2.4-2.4h31.2c1.325 0 2.4 1.075 2.4 2.4v19.2c0 1.325-1.075 2.4-2.4 2.4zm-5.807-7.11v1.11c.159.022.342.035.528.035h.016-.001c1.394 0 2.056-.542 2.626-2.147l2.514-7.05h-1.454l-1.686 5.446h-.03l-1.686-5.446h-1.496l2.425 6.713-.13.408c-.088.549-.559.963-1.125.963-.028 0-.056-.001-.084-.003h.004c-.112-.005-.332-.018-.42-.029zm-22.08-8.836h-.026c-.886.025-1.651.519-2.058 1.241l-.006.012c-.844 1.452-.307 3.674.627 5.027.438.64.918 1.266 1.551 1.266h.034c.265-.017.51-.086.731-.197l-.011.005c.267-.134.581-.213.913-.216h.001c.321.002.624.08.891.216l-.011-.005c.215.112.468.18.737.186h.002.027c.705-.013 1.147-.66 1.538-1.23.279-.404.51-.869.672-1.366l.011-.038v-.01l-.018-.008c-.78-.355-1.313-1.125-1.318-2.021v-.001c.008-.796.427-1.492 1.055-1.887l.009-.005.018-.012c-.409-.588-1.074-.974-1.83-.994h-.003c-.035 0-.071 0-.106 0-.446.024-.862.131-1.239.307l.021-.009c-.172.084-.372.145-.583.171l-.009.001c-.228-.025-.436-.087-.626-.181l.011.005c-.293-.142-.636-.235-.997-.259h-.008zm18.113 1.816c.88 0 1.366.412 1.366 1.159v.509l-1.786.106c-1.675.101-2.56.78-2.56 1.963.012 1.108.912 2.001 2.022 2.001.084 0 .166-.005.247-.015l-.01.001c.019.001.042.001.065.001.869 0 1.629-.468 2.041-1.167l.006-.011h.03v1.102h1.325v-4.586c0-1.33-1.061-2.188-2.703-2.188-1.514 0-2.64.868-2.685 2.063h1.29c.144-.549.635-.947 1.219-.947.047 0 .094.003.14.008l-.006-.001zm-9.826-3.566v9.216h1.431v-3.152h1.977c.046.003.101.004.155.004 1.618 0 2.929-1.311 2.929-2.929 0-.041-.001-.081-.002-.121v.006c.002-.038.003-.082.003-.127 0-1.602-1.298-2.9-2.9-2.9-.048 0-.096.001-.143.003h.007zm-4.747-.704c-.594.058-1.112.34-1.477.76l-.002.003c-.333.373-.536.868-.536 1.41 0 .047.002.094.005.14v-.006c.034 0 .07.004.11.004.56-.032 1.051-.3 1.378-.707l.003-.004c.327-.387.526-.891.526-1.443 0-.055-.002-.11-.006-.165v.007zm14.236 8.901c-.758 0-1.249-.365-1.249-.929 0-.582.47-.917 1.36-.97l1.59-.1v.521c-.035.828-.715 1.485-1.548 1.485-.054 0-.107-.003-.16-.008zm-6.418-3.33h-1.644v-3.661h1.65c.07-.01.151-.016.234-.016.951 0 1.722.771 1.722 1.722 0 .042-.002.085-.005.126v-.006c.003.036.004.079.004.122 0 .954-.774 1.728-1.728 1.728-.082 0-.164-.006-.243-.017l.009.001z" />
            </svg>
          </Link>
        </div>

      </div>
      <hr />

      <div class="container w-50">
        <hr />


        <div class="cardDiv-grid container-fluid d-flex justify-content-center mt-10" style={{color:"black", border:"solid 1.5px"}}>
        <div class="mr-auto mt-3">
        <p class= "">Ticket Price : </p>
        <p class= "">Tax : </p>
        <hr />
        <p class= "">Sub-total : </p>
        <p class= "">Booking Fee : </p>
        <hr/>
        <hr style={{color:"transparent", border:"solid 1.5px", marginLeft:"300px", marginRight:"50px"}}/>
        <p class= "">Total-Amount : </p>
        </div>
        <div class="ml-auto mt-3">
        <p class= "">Price Value</p>
        <p class= "">15%</p>
        <hr />
        <p class= "">price+tax</p>
        <p class= "">2</p>
        <hr />
        <p class= "">price+tax+booking fee</p>
        </div>
      </div>
      </div>


      <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top ">
      <Link  class="btn btn-danger btn-lg btn-block" to="/mybookings">Proceed with booking </Link>
    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
    </ul>
  </footer>
      

    </div>
  );
}
