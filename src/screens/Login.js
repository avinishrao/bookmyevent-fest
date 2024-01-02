import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import logo from "../image/bookmyevent.png";

export default function Login() {

  const [credentials, setcredentials] = useState({email:"",password:""})
  const navigate = useNavigate();
    const signInUser = async (e)=>{
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/loginuser", {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({email:credentials.email,password:credentials.password})
        })

        const json = await response.json();
        console.log(json);
        if(!json.success){
            alert("Enter Valid Credentials")
        }
        if(json.success){
          localStorage.setItem("authToken", json.authToken);
          navigate('/');
        }

    }

    const onChange = (event)=>{
        setcredentials({...credentials,[event.target.name]:event.target.value})

    }

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

            <div class="d-flex">
                <Link class="btn bg-danger text-white mx-1" to="/">
                  Home
                </Link>

                <Link class="btn bg-danger text-white mx-1" to="/createuser">
                  Register
                </Link>
              </div>
          </div>
        </nav>

        <form onSubmit={signInUser}>
  <div class="form-group">
    <label for="InputEmail1">Email address</label>
    <input type="email" class="form-control" id="InputEmail1"  placeholder="Enter email" name='email' value={credentials.email} onChange={onChange}/>
    <small id="email" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  {/* <div class="form-group">
    <label for="InputMobile">Mobile</label>
    <input type="text" class="form-control" id="InputMobile" placeholder="Mobile" name='mobile' value={credentials.mobile} onChange={onChange}/>
  </div> */}
  <div class="form-group">
    <label for="InputPassword1">Password</label>
    <input type="password" class="form-control" id="InputPassword1" placeholder="Password" name='password' value={credentials.password} onChange={onChange}/>
  </div>
  <button type="submit" class="m-3 btn btn-primary">Submit</button>
  <Link to="/createuser" class="m-3 btn btn-danger">I'm a new user</Link>
</form>
    </div>
    </div>
  )
}
