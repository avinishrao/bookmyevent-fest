import React from "react";

export default function Card(props) {
  return (
      <div class="card mt-3" style={{ width: "14rem", maxHeight: "700px" }}>
        <img src={props.imgsrc} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">{props.eventName}</h5>
          <p class="card-text">{props.eventgenre}</p>
          <div class = "container w-100"> 
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
          <a href="/" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
  );
}
