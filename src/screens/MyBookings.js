import React, { useEffect, useState } from "react";
import BookingCard from "../components/BookingCard";
import { Link, useNavigate } from "react-router-dom";
import logo from "../image/bookmyevent.png";
// import { Link } from 'react-router-dom'

export default function MyBookings() {
  const [bookingData, setBookingData] = useState([]);
  const navigate = useNavigate();

  const handleLogout = async () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };
  
  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/carddata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    setBookingData(response[2]);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <div class="container">
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
                <Link class="btn bg-danger text-white mx-1" to="/">
                  Home
                </Link>
                <div class="btn btn-outline-danger mx-2" onClick={handleLogout}>
                  Logout
                </div>
              </div>
            )}
          </div>
        </nav>
        <div class="filter-div">
          <h4 class="filter-title">
            Your Bookings
            <hr
              style={{
                color: "white",
                border: "solid 1.5px",
                marginLeft: "0px",
                marginRight: "50px",
              }}
            />
          </h4>
        </div>
        <div class="row mt-3">
          {bookingData !== [] ? (
            bookingData.map((data) => {
              return (
                <div key={data._id} class="col-12 col-md-6 col-lg-12 ">
                  <BookingCard
                    filterItem={data}
                  ></BookingCard>
                </div>
              );
            })
          ) : (
            <div>No such Data Found</div>
          )}
        </div>
      </div>
    </div>
  );
}
