import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "../image/bookmyevent.png";

export default function Signup() {
    const [credentials, setcredentials] = useState({name:"",email:"",mobile:"",password:"",geolocation:""})
    const registerUser = async (e)=>{
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/createuser", {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({name:credentials.name,email:credentials.email,mobile:credentials.mobile,password:credentials.password,location:credentials.geolocation})
        })

        const json = await response.json();
        console.log(json);
        if(!json.success){
            alert("Enter Valid Credentials")
        }

    }

    const onChange = (event)=>{
        setcredentials({...credentials,[event.target.name]:event.target.value})

    }
  return (
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
                <Link class="btn bg-danger text-white mx-1" to="/login">
                  Sign in
                </Link>

                
              </div>
          </div>
        </nav>

        <form onSubmit={registerUser}>
  <div class="form-group">
    <label for="name">Name</label>
    <input type="name" class="form-control" id="name" placeholder="Enter name" name='name' value={credentials.name} onChange={onChange}/>
  </div>
  <div class="form-group">
    <label for="InputEmail1">Email address</label>
    <input type="email" class="form-control" id="InputEmail1"  placeholder="Enter email" name='email' value={credentials.email} onChange={onChange}/>
    <small id="email" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="InputMobile">Mobile</label>
    <input type="text" class="form-control" id="InputMobile" placeholder="Mobile" name='mobile' value={credentials.mobile} onChange={onChange}/>
  </div>
  <div class="form-group">
    <label for="InputPassword1">Password</label>
    <input type="password" class="form-control" id="InputPassword1" placeholder="Password" name='password' value={credentials.password} onChange={onChange}/>
  </div>
  <div class="form-group">
    <label for="InputAddress">Location</label>
    <input type="text" class="form-control" id="InputAddress" placeholder="Address" name='geolocation' value={credentials.geolocation} onChange={onChange}/>
  </div>
  <button type="submit" class="m-3 btn btn-primary">Submit</button>
  <Link to="/login" class="m-3 btn btn-danger">Already a user?</Link>
</form>
    </div>
  )
}
