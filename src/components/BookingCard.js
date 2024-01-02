import React, { useState } from 'react'

export default function BookingCard(props) {
    const bookingData = props.filterItem;
    const [eventEndDate] = useState(bookingData.eventendDate)
    const [todayDate] =useState(getTodayDate())

    function getTodayDate() {
        return new Date().toISOString().split('T')[0];
      }

  return (
    <div><div>
        <div class="card container mt-3" style={{ width: "100%", maxHeight: "700px" }}>
        <div class="container-fluid">
          <div class="row mt-3">
            <div class="col-12 col-md-6 col-lg-9">
              <h5 class="" style={{ textAlign: "left" }}>
                {bookingData.eventTitle} | {bookingData.Language} | 1hr
              </h5>
              <p class="card-text" style={{ textAlign: "left" }}>
                {bookingData.genre}
              </p>
            </div>

            <div class="col-12 col-md-6 col-lg-3 d-flex justify-content-md-end">
            
            {eventEndDate < todayDate ? (
                    <p
                    class="bg-warning text-white mt-3"
                    style={{ width: "8rem", textAlign:'center', verticalAlign:'middle !important' }}
                  >
                    PAST EVENTS
                  </p>
                  ) : (
                    <p
              class="bg-success text-white mt-3"
              style={{ width: "8rem", textAlign:'center', verticalAlign:'middle !important' }}
            >
              BOOKED
            </p>
                  )}


                
        </div>
           
          </div>
          <hr />
          <div class="row">
            <div class="col-12 col-md-6 col-lg-3">
              <p class="" style={{}}>
               Booked On: {bookingData.bookedOn}
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
                {bookingData.venue}
                </p>
                <small class="mx-5 text-primary" style={{ display: "inline" }}>Paid: {bookingData.price}</small>
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
    </div></div>
  )
}
