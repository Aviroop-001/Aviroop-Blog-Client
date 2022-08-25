import "./Register.scss";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { useState } from "react";
import {useToast} from '@chakra-ui/react';
import API from '../../api';

const Register = () => {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState(false);

//functions
  const toast= useToast();

  const handleSubmit= async (e) =>{
    e.preventDefault();
    try {
      const registerUser = await API.post("/auth/register", {
          username,
          email,
          password
        })
        //TODO: if user successfully registered, relocate from /register to /login
        toast({
          title: 'Welcome new User',
          description: "It's your home!!!",
          status: 'success',
          duration: 4000,
          isClosable: true,
          position: 'top',
        });
        registerUser.data && window.location.replace("/login")
    } catch (err) {
      seterror(true);
      toast({
        title: 'Shit happens :(',
        description: "Might be your fault!! Try AGAIN.",
        status: 'error',
        duration: 4000,
        isClosable: true,
        position: 'top',
      });
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
