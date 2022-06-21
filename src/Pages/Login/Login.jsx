import './Login.scss';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import { useContext, useRef } from 'react';
import {Context} from '../../context/Context';
import API from '../../api';
import swal from 'sweetalert';

const Login = () => {

  //TODO: useRef is a React hook 
  const userRef = useRef();
  const passwordRef = useRef();
  //TODO: we're using context to store the context object so we can use it globally(in file). We also destructure the object
  const {user, dispatch, isFetching} = useContext(Context);

  const handleSubmit= async (e) =>{
    e.preventDefault();
    //TODO: Dispatch is bascally a packet object that sends a specific data according to the "type we mentioned for it. Remember the switch case for 3 different cases. Here's how we use it"
    dispatch({type : "LOGIN_START"});

    try {
      //TODO: basic API post request
      const res = await API.post("/auth/login", {
        //TODO: refer to useRef material
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      //TODO: Since we posted the data successfully, we can now dispatch the LOGIN_SUCCESS object predefined in REDUCER
      dispatch({type : "LOGIN_SUCCESS", payload: res.data});
      swal({
        title: "Logged in Successfully",
        icon: "success",
      });
    } 
    catch (err) {
      //TODO: An error seems to have happened, maybe password was wrong or user has not been registered yet. So here we dispatch the LOGIN_FAILURE package object
      dispatch({type : "LOGIN_FAILURE"});
      swal({
        title: "Ooops! Something went wrong",
        icon: "error",
      });
    }
  };
  return (
    <div className='Login'>
        <form className="loginCredentials" onSubmit={handleSubmit}>
          <label htmlFor="">Username</label>
          <input type="text" 
            placeholder='Enter Username' 
            autoComplete='false' 
            autoFocus='true'
            ref={userRef} />

          <label htmlFor="">Password</label>
          <input type="text" 
            placeholder='Enter your Password' 
            autoComplete='false'
            ref={passwordRef}/>

          <button className="login" type='submit' disabled={isFetching}>
          LOGIN
          </button>
        </form>
        <button className="registerLogin">
          <Link className='link' to="/register"> REGISTER </Link>
        </button>
    </div>
  )
}

export default Login