import './NavBar.scss';

import { LinkedIn, Facebook, GitHub, Instagram } from '@material-ui/icons';
import {Avatar, IconButton} from '@material-ui/core';
import swal from 'sweetalert';
import { useState, useEffect } from 'react';

import {
  // BrowserRouter as Router,
  Link
} from "react-router-dom";
import { useContext } from 'react';
import {Context} from '../../context/Context';

const NavBar = () => {

  const {user, dispatch} = useContext(Context);

  const logoutHandler = () =>{
    console.log("logout tried");
    dispatch({type : "LOGOUT"});
    console.log("logout success")
    swal({
      title: "You logged out",
      icon: "success",
    });
  }

  const [menuactive, setmenuactive] = useState(false);
  const toggleNav = () =>{
    setmenuactive(!menuactive);
  }

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener('resize', changeWidth)

  },[])

  return (
  <nav className="navigationBar">
    {(menuactive || screenWidth > 880) && (<div className="NavBar">
        <div className="mainTitle"></div>
  
        <div className="navItems">
            <ul className="navList">
                <li className="navItem">
                  <Link className='link' to="/" onClick={()=>{setmenuactive(!menuactive)}}> HOME </Link>
                </li>
                <li className="navItem">
                  <Link className='link' to="/about" onClick={()=>{setmenuactive(!menuactive)}}> ABOUT </Link>
                </li>
                <li className="navItem">
                  <Link className='link' to="/compose" onClick={()=>{setmenuactive(!menuactive)}}> COMPOSE </Link>
                </li>
                {user && <li className="navItem" onClick={logoutHandler}>
                  <Link className='link' to="/"> LOGOUT </Link>
                </li>}
            </ul>
        </div>

        <div className="searchMe">
          { user ? 
          <Link to={`/settings`} style={{textDecoration:"none", color:"black"}}>
            <IconButton>
              <Avatar sx={{ width: 30, height: 30 }} style={{"background":"crimson"}}> 
                {/* For LocalHost */}
                {/* {user.username.charAt(0).toUpperCase()} */}
                {/* For Live Site-------------------- */}
                {user.username.charAt(0).toUpperCase()}
              </Avatar>
            </IconButton>
          </Link>
            : <>
              <Link className='link' to="/login" style={{marginRight: "10px"}}
              onClick={()=>{setmenuactive(!menuactive)}}>
                LOGIN
              </Link>
              <Link className='link' to="/register" style={{marginRight: "10px"}}
              onClick={()=>{setmenuactive(!menuactive)}}>
                REGISTER
              </Link>
            </>
          }
        </div>
    </div>)}
    <div className="socialMedia">
        <a href='https://github.com/Aviroop-001' target='_blank'><GitHub style={{color: "black" }}/></a>
        <a href='https://www.linkedin.com/in/aviroop-banerjee-4946621b5/' target='_blank'><LinkedIn style={{color: "navy" }}/></a>
        <a href='https://www.facebook.com/aviroop.banerjee.10' target='_blank'><Facebook style={{color: "blue" }}/></a>
        <a href=''><Instagram style={{color: "purple" }}/></a>
    </div>
    <div className={'btn '+ (menuactive && 'active')} onClick={toggleNav}>
      <div className='line' id="line1"></div>
      <div className='line' id="line2"></div>
      <div className='line' id="line3"></div>
    </div>
  </nav>
  )
}

export default NavBar;