import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function EventDetails() {
  const [eventDetails, seteventDetails] = useState({});
  // const eventDetails = [];
  // let i=0;

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/carddata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    for (let i = 0; i < response[0].length; i++) {
      if (response[0][i]._id === localStorage.getItem("currentCardId")) {
        seteventDetails(response[0][i]);
      }
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div class="container">
      {}

      <div class="card mt-3" style={{ width: "100%", maxHeight: "700px" }}>
        <div class="event_bg_blurimage" style={{}}>
          <div>
            <img
              src={eventDetails.img}
              class="card-img-top"
              alt="..."
              style={{ height: "360px", objectFit: "contain" }}
            />
          </div>
        </div>
        <div class="container-fluid">
          {/* <div class="card-body me-auto">
          <h5 class="" style={{ textAlign: "left" }}>
            TITILE
          </h5>
          <p class="card-text" style={{ textAlign: "left" }}>
            TEXT DESCRIPTION
          </p>
        </div> */}
          <div class="row mt-3">
            <div class="col-12 col-md-6 col-lg-9">
              <h5 class="" style={{ textAlign: "left" }}>
                {eventDetails.eventTitle} | Language | total hours(1hr 24m)
              </h5>
              <p class="card-text" style={{ textAlign: "left" }}>
                {eventDetails.genre}
              </p>
            </div>
           

            {(!localStorage.getItem("authToken"))?
          <div class="col-12 col-md-6 col-lg-3 d-flex justify-content-md-end">
          <Link class="" to="/login">
            <button
              class="btn btn-danger btn-lg"
              type="submit"
              style={{ width: "10rem", height: "60px" }}
            >
              BOOK
            </button>
          </Link>
        </div>
          :
          <div class="col-12 col-md-6 col-lg-3 d-flex justify-content-md-end">
          <Link class="" to="/bookevents">
            <button
              class="btn btn-danger btn-lg"
              type="submit"
              style={{ width: "10rem", height: "60px" }}
            >
              BOOK
            </button>
          </Link>
        </div>
          }


           
          </div>
          <hr />
          <div class="row">
            <div class="col-12 col-md-6 col-lg-3">
              <p class="" style={{}}>
                {eventDetails.fromDate} - {eventDetails.toDate}
              </p>
            </div>
            <div class="col-12 col-md-6 col-lg-9">
              <div>
                <svg
                  width="40px"
                  height="30px"
                  viewBox="0 0 8 24"
                  fill="yellow"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ display: "inline", color: "yellow" }}
                >
                  <path
                    d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p class="mx-2" style={{ display: "inline" }}>
                  {eventDetails.venue} | € {eventDetails.prices}{" "}
                  <small>onwards</small>
                </p>
              </div>
            </div>
            {/* <div class="col-12 col-md-6 col-lg-3">
          <p class="card-text" style={{  }}>
            TEXT DESCRIPTION
          </p>
          </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
