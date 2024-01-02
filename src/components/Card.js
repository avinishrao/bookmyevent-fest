import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EventDetails from "../screens/EventDetails";

export default function Card(props) {
  const [cardData, setCardData] = useState([]);
  const filterItems = props.filterItem;

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/carddata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    setCardData(response[0]);
    // console.log(response[0], response[1]);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleEventDetails = () => {
    cardData
      .filter(
        (dataItems) =>{
          if(dataItems._id === filterItems._id)
            localStorage.setItem("currentCardId", dataItems._id)
            return(
              
              <div key={dataItems._id}><EventDetails eventDetails={dataItems}></EventDetails></div>
            )
        }
          
      )

    // if(cardData._id === filterItems._id){
    //   console.log("data is present")
    // }
    // else{
    //   console.log("you are dumb")
    // }
  };
  return (
    <Link class="btn btn-outline" to="/eventdetails">
      <div
        class="card mt-3"
        style={{ width: "14rem", maxHeight: "700px" }}
        onClick={handleEventDetails}
      >
        <img
          src={filterItems.img}
          class="card-img-top"
          alt="..."
          style={{ height: "360px", objectFit: "cover" }}
        />
        <div class="card-body">
          <h5 class="card-title" style={{ textAlign: "left" }}>
            {filterItems.eventTitle}
          </h5>
          <p class="card-text" style={{ textAlign: "left" }}>
            {filterItems.genre}
          </p>
          {/* <div class = "container w-100"> 
            <select class = "m-2 h-100 rounded">
              {
                Array.from(Array(6), (e,i)=>{
                  return(
                    <option key={i+1} value={i+1}>{i+1}</option>
                  )
                })
              }
            </select>
          </div>
          <a href="/" class="btn btn-primary">Go somewhere</a> */}
        </div>
      </div>
    </Link>
  );
}
