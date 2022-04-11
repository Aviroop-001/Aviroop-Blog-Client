import './Home.scss';
import { useState, useEffect } from 'react';
import Header from '../../Components/Header/Header';
import SideBar from '../../Components/SideBar/SideBar';
import Posts from '../../Components/Posts/Posts';
import axios from "axios";
import { useLocation } from 'react-router-dom';

const Home = () => {

  const {search}= useLocation();

  const [posts, setposts] = useState([]);
  useEffect( () => {
    const fetchPosts = () =>{
      axios.get("/posts"+search)
      .then( res =>{
        setposts(res.data);
      })
    };
    fetchPosts();
  }, [search])
  

  return (
    <div className='Home'>
        <Header/>
        <div className="content">
          <Posts posts={posts}/>
          <SideBar/>
        </div>
    </div>
  )
}

export default Home