import "./Register.scss";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import swal from 'sweetalert';

const Register = () => {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState(false);

  const handleSubmit= async (e) =>{
    e.preventDefault();
    try {
      const registerUser = await axios.post("/auth/register", {
          username,
          email,
          password
        })
        //TODO: if user successfully registered, relocate from /register to /login
        swal({
          title: "Registered Successfully",
          icon: "success",
        });
        registerUser.data && window.location.replace("/login")
    } catch (err) {
      seterror(true);
    }
    
  }
  return (
    <div className="Register">
      <form className="registerCredentials" onSubmit={handleSubmit}>
        <label htmlFor="">Name</label>
        <input
          type="text"
          placeholder="Enter your Name"
          autoComplete="false"
          autoFocus="true"
          //TODO: as event is triggered, set field to target value. Same for email and password
          onChange={(e) => setusername(e.target.value)}
        />

        <label htmlFor="">Email</label>
        <input type="text" 
          placeholder="Enter email ID"  autoComplete="false" 
          onChange={(e) => setemail(e.target.value)}/>

        <label htmlFor="">Password</label>
        <input type="text" 
          placeholder="Enter Password"  autoComplete="false" 
          onChange={(e) => setpassword(e.target.value)}/>

        <button className="registerButton" type="submit">Register</button>
      </form>
      <button className="loginRegister">
        <Link className="link" to="/login">
          {" "}
          LOGIN{" "}
        </Link>
      </button>
      {/* //TODO: Error message if user already exists */}
      {error && <span style={{marginTop:"5px", fontSize:"1.2rem", color:"red", fontStyle:"bold"}}>Username/Email already in use!</span>}
    </div>
  );
};

export default Register;
