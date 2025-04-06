import React, { use, useState } from 'react'
import './Login.css'
import { useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();
  let [user, setUser] = useState("")
  let [pass, setPass] = useState("")
  let [err, setErr] = useState("Error")
  function handle(e) {
    e.preventDefault()

    if (pass.length === 0) {
      setErr("Password cannot be empty")
      alert("Password cannot be empty")
    }
    else if (pass.length < 8) {
      setErr("Password must be more than 8 characters")
      alert("Password must be more than 8 characters")
    }
    // else if {
    //   setErr("")
    //   // alert("Login Successful!")
    // }
    else if (pass === "Admin2006" && user === "admin") {
      // alert("Login Successful!")
      navigate("/begning")
    }
    else{
      alert("Wrong Username or Password")
    }


  }
  return (


    <div className='loginPage'>
      <div className="login">

        <marquee><h1>Welcome Back!</h1></marquee>
        <input type="text" placeholder="User Name" required value={user} onChange={(e) => setUser(e.target.value)} />
        <br />
        <input type="password" placeholder="Password" required value={pass} onChange={(e) => setPass(e.target.value)} />
        <br />
 <button onClick={handle}>Login</button>
        <p>username: admin</p>
        <p>pass: Admin2006</p>



      </div>
    </div>


  )
}
export default Login
