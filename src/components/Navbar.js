import React from "react";
import {Link} from 'react-router-dom';
export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            BookMyEvent
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
            <form class="input-group">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search for Events"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
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
            </form>
          </div>
        </nav>
    </div>
  );
}
