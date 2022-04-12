import './NavBar.scss';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import SearchIcon from '@material-ui/icons/Search';
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
    setmenuactive(!menuactive);
    dispatch({type : "LOGOUT"});
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
        <div className="socialMedia">
          {/* <IconButton> */}
            <LinkedInIcon />
          {/* </IconButton> */}
          {/* <IconButton> */}
            <FacebookIcon />
          {/* </IconButton> */}
          {/* <IconButton> */}
            <GitHubIcon />
          {/* </IconButton> */}
          {/* <IconButton> */}
            <InstagramIcon />
          {/* </IconButton> */}
        </div>
        <div className="navItems">
            <ul className="navList">
                <li className="navItem">
                  <Link className='link' to="/" onClick={()=>{setmenuactive(!menuactive)}}> HOME </Link>
                </li>
                <li className="navItem">
                  <Link className='link' to="/about" onClick={()=>{setmenuactive(!menuactive)}}> ABOUT </Link>
                </li>
                <li className="navItem">
                  <Link className='link' to="/contact" onClick={()=>{setmenuactive(!menuactive)}}> CONTACT </Link>
                </li>
                <li className="navItem">
                  <Link className='link' to="/compose" onClick={()=>{setmenuactive(!menuactive)}}> COMPOSE </Link>
                </li>
                <li className="navItem" onClick={logoutHandler}>
                  <Link className='link' to="/"> {user && "LOGOUT"} </Link>
                </li>
            </ul>
        </div>
        <div className="searchMe">
          { user ? 
          <Link to={`/settings`} style={{textDecoration:"none", color:"black"}}>
            <IconButton>
              <Avatar sx={{ bgcolor: 'green', width: 30, height: 30 }}> AB </Avatar>
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
          <IconButton>
            <SearchIcon />
          </IconButton>
        </div>
    </div>)}
    <div className={'btn '+ (menuactive && 'active')} onClick={toggleNav}>
      <div className='line' id="line1"></div>
      <div className='line' id="line2"></div>
      <div className='line' id="line3"></div>
    </div>
    </nav>
  )
}

export default NavBar;