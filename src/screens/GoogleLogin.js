import { useState } from "react";
import React from "react";
import Navbar from "../components/Navbar";
import Model from "react-modal";
import {jwtDecode} from "jwt-decode";
import LogOut from "../screens/Logout"

export default function Login() {
  const [visible, setvisible] = useState(false);
  const [user, setUser] = useState({});

  // const google = window.google
  const googlecid =
    "775449761829-g7o268e81vvth9mg6g6anbnc72au14e4.apps.googleusercontent.com";

  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    var userObject = jwtDecode(response.credential);
    console.log(userObject);
    setUser(userObject);
  }

  const googleauthentication = () => {
    window.google.accounts.id.disableAutoSelect();

    window.google.accounts.id.initialize({
      client_id: googlecid,
      callback: handleCallbackResponse,
    });

    window.google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", size: "default", width: "350", text: "continue_with" }
    );


  };

  const afterModalOpen = () => {
    console.log("Modal has been opened!");
    googleauthentication();
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div id="myInput"></div>
      <div class="container mt-3">
        <h3>Modal Example</h3>
        <p>Click on the button to open the modal.</p>

        <button
          onClick={() => setvisible(true)}
          type="button"
          class="btn btn-primary"
        >
          Open modal
        </button>

        <div class="modal-popup">
          <Model
            isOpen={visible}
            onRequestClose={() => setvisible(false)}
            onAfterOpen={afterModalOpen}
          >
            <div class="popup-head">
              <div class="container mt-3 login-getstarted">
                <b>
                  <h6>Get Started</h6>
                </b>
              </div>
              <svg
                onClick={() => setvisible(false)}
                id="svg_close"
                type="button"
                width="15"
                height="15"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Close</title>
                <g fill="#666">
                  <path d="M13.125 0l-7.5 7.5 7.5 7.5 1.429-1.428L8.482 7.5l6.072-6.071z"></path>
                  <path d="M1.429 0l7.5 7.5-7.5 7.5-1.43-1.428L6.072 7.5 0 1.43z"></path>
                </g>
              </svg>
            </div>

            <div class="modal-body">
              Modal body..
              <div class="bwc__sc-dh558f-9 gRiudS">
                <div id="signInDiv"></div>

                <div>
                  <button class="email-login" onClick={"/"}>
                    <img
                      alt="email logo"
                      src="//in.bmscdn.com/webin/common/icons/email.svg"
                    />{" "}
                    Continue with Email
                  </button>
                </div>

                {/* <div>
                  <button class="email-login" onClick={"/"}>
                    <svg
                      width="19"
                      xmlns="http://www.w3.org/2000/svg"
                      height="19"
                      viewBox="0 0 170 170"
                      aria-labelledby="apple-label"
                      role="img"
                    >
                      <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.197-2.12-9.973-3.17-14.34-3.17-4.58 0-9.492 1.05-14.746 3.17-5.262 2.13-9.501 3.24-12.742 3.35-4.929.21-9.842-1.96-14.746-6.52-3.13-2.73-7.045-7.41-11.735-14.04-5.032-7.08-9.169-15.29-12.41-24.65-3.471-10.11-5.211-19.9-5.211-29.378 0-10.857 2.346-20.221 7.045-28.068 3.693-6.303 8.606-11.275 14.755-14.925s12.793-5.51 19.948-5.629c3.915 0 9.049 1.211 15.429 3.591 6.362 2.388 10.447 3.599 12.238 3.599 1.339 0 5.877-1.416 13.57-4.239 7.275-2.618 13.415-3.702 18.445-3.275 13.63 1.1 23.87 6.473 30.68 16.153-12.19 7.386-18.22 17.731-18.1 31.002.11 10.337 3.86 18.939 11.23 25.769 3.34 3.17 7.07 5.62 11.22 7.36-.9 2.61-1.85 5.11-2.86 7.51zM119.11 7.24c0 8.102-2.96 15.667-8.86 22.669-7.12 8.324-15.732 13.134-25.071 12.375a25.222 25.222 0 0 1-.188-3.07c0-7.778 3.386-16.102 9.399-22.908 3.002-3.446 6.82-6.311 11.45-8.597 4.62-2.252 8.99-3.497 13.1-3.71.12 1.083.17 2.166.17 3.24z"></path>
                    </svg>{" "}
                    Continue with Apple
                  </button>
                </div> */}

                <div><LogOut/></div>
              </div>
              <div>
                <center> OR </center>
              </div>
              <form class="bwc__sc-dh558f-38 hmgVIc">
                <div>
                <img
                        alt="indian flag"
                        src="//in.bmscdn.com/webin/common/icons/indianflag.svg"
                        // style={{"display": "inline"}}
                      />
                      <div>+91</div>
                      <div>
                      <input
                          id="mobileNo"
                          type="tel"
                          pattern="[0-9]*"
                          placeholder="Continue with mobile number"
                          class="bwc__sc-dh558f-21 fFQlzG"
                          value=""
                        />
                        <label for="mobileNo" class="bwc__sc-dh558f-22 inuRSZ">
                          Continue with mobile number
                        </label>
                      </div>
                </div>
                
                <div class="">
                  <div class="">
                    I agree to the{" "}
                    <a
                      href="/terms-and-conditions"
                      target="_blank"
                      color="DIMGRAY"
                      class=""
                    >
                      Terms &amp; Conditions
                    </a>{" "}
                    &amp;{" "}
                    <a
                      href="/privacy"
                      target="_blank"
                      color="DIMGRAY"
                      class=""
                    >
                      Privacy Policy
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </Model>
        </div>
      </div>
    </div>
  );
}
