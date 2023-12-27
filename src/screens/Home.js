import React, { useEffect, useState } from "react";
// import Navbar from "../components/Navbar";
// import Navbar_2 from "../components/Navbar_2";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
import { Link } from "react-router-dom";
import logo from "../image/bookmyevent.png";

export default function Home() {
  const [search, setsearch] = useState('');
  const [cardCat, setCardCat] = useState([]);
  const [cardData, setCardData] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/carddata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    setCardCat(response[1]);
    setCardData(response[0]);
    // console.log(response[0], response[1]);
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
            <img 
            height="25"
            src={logo}/>
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
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div class="input-group justify-content-center">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search for Events"
                aria-label="Search"
                value={search}
                onChange={(e)=>{setsearch(e.target.value)}}
              />
              {/* <button class="btn btn-outline-success" type="submit">
                Search
              </button> */}
            </div>
          </div>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item dropdown">
              <Link
                class="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </Link>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link class="dropdown-item" to="#">
                    Action
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="#">
                    Another action
                  </Link>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <Link class="dropdown-item" to="#">
                    Something else here
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <form class="d-flex">
            <Link class="" to="/login">
              <button class="btn btn-outline-success" type="submit">
                Sign in
              </button>
            </Link>

            <Link class="" to="/createuser">
              <button class="btn btn-outline-success" type="submit">
                Register
              </button>
            </Link>
          </form>
        </div>
      </nav>
      </div>
      <div>
        <Carousel />
      </div>
        <div class="container">
          {cardCat !== []
            ? cardCat.map((data) => {
                return (
                  <div>
                    <div key={data._id} class="fs-3 m-3">
                      {data.genre}
                      <hr />
                    </div>
                    <div class = "row mb-3">
                    {cardData !== [] ? 
                      cardData
                        .filter((dataItems) => (dataItems.genre === data.genre) && (dataItems.eventTitle.toLowerCase().includes(search.toLowerCase())) )
                        .map(filterItems=> {
                          return (
                            <div key={filterItems._id} class= "col-12 col-md-6 col-lg-3">
                              <Card eventName = {filterItems.eventTitle}
                              imgsrc={filterItems.img}
                              eventgenre={filterItems.genre}
                              ></Card>
                            </div>
                          )
                        })
                     :<div>No such Data Found</div>
                    }
                    </div>
                  </div>
                );
              })
            : ""}
          {/* <Card /> */}
        </div>
        <div class="foo-1">
          <Footer />
        </div>
      </div>
  );
}
