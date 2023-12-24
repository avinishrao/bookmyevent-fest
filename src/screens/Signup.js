import React, { useState } from 'react'
import { Link } from 'react-router-dom'

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
