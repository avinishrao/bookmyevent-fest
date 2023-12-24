import React from "react";
// import { GoogleLogout } from "react-google-login";

import { googleLogout } from '@react-oauth/google';

export default function Login() {
  const googlecid = "775449761829-g7o268e81vvth9mg6g6anbnc72au14e4.apps.googleusercontent.com";

  const onSuccess = () => {
    console.log("Logout Successful!");
    googleLogout({
        client_id: googlecid
    });
  };

//   const onFailure = () => {
//     console.log("Logout Error!");
//   };

//   app.post('/logout', (req, res) => {
//     // Clear server cache
//     cache.clear();
//     // Other logout logic
// });

  return (
    <div id="signOutButton">
      <button
        onClick={onSuccess}
      >Logout</button>
    </div>
  );
}
