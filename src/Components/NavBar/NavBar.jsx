import './NavBar.scss';

import { LinkedIn, Facebook, GitHub, Instagram, ExitToAppOutlined, Add, Info, Home } from '@material-ui/icons';
import {Avatar, IconButton} from '@material-ui/core';
import {Tooltip, useToast} from '@chakra-ui/react';
import { useState, useEffect } from 'react';

import {
  // BrowserRouter as Router,
  Link
} from "react-router-dom";
import { useContext } from 'react';
import {Context} from '../../context/Context';

const NavBar = () => {

  //states
  const {user, dispatch} = useContext(Context);
  const [menuactive, setmenuactive] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  //functions
  const toast = useToast();

  const logoutHandler = () =>{
    try {
      console.log("logout tried");
    dispatch({type : "LOGOUT"});
    console.log("logout success");
    toast({
      title: 'Logged out!!!',
      description: "Log out successful. You can login again",
      status: 'success',
      duration: 4000,
      isClosable: true,
      position: 'top',
    });
    } catch (err) {
      console.log(err);
      toast({
        title: 'Something went wrong :(',
        description: "Couldn't log out. Try again.",
        status: 'error',
        duration: 4000,
        isClosable: true,
        position: 'top',
      });
    }
    
  }

  const toggleNav = () =>{
    setmenuactive(!menuactive);
  }

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
                  <Link className='link' to="/" onClick={()=>{setmenuactive(!menuactive)}}>
                  <Tooltip hasArrow label='Home sweet home' fontSize='15px' bg='yellow.200' color='black'>
                    <IconButton><Home style={{color:'#86C232', fontSize:'2rem'}}/></IconButton>
                    </Tooltip>
                  </Link>
                </li>
                <li className="navItem">
                  <Link className='link' to="/about" onClick={()=>{setmenuactive(!menuactive)}}>
                  <Tooltip hasArrow label='About me' fontSize='15px' bg='green.200' color='black'>
                    <IconButton><Info style={{color:'#86C232', fontSize:'2rem'}}/></IconButton>
                  </Tooltip>
                  </Link>
                </li>
                <li className="navItem">
                  <Link className='link' to="/compose" onClick={()=>{setmenuactive(!menuactive)}}>
                  <Tooltip hasArrow label='Compose new Post' fontSize='15px' bg='blue.200' color='black'>
                    <IconButton><Add style={{color:'#86C232', fontSize:'2rem'}}/></IconButton>
                  </Tooltip>
                  </Link>
                </li>
                {user && <li className="navItem" onClick={logoutHandler}>
                  <Link className='link' to="/"> 
                  <Tooltip hasArrow label='Logout' fontSize='15px' bg='red.200' color='black'>
                    <IconButton><ExitToAppOutlined style={{color:'#86C232', fontSize:'2rem'}}/></IconButton>
                  </Tooltip>
                  </Link>
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