import './Home.scss';
import { useState, useEffect } from 'react';
import Header from '../../Components/Header/Header';
import SideBar from '../../Components/SideBar/SideBar';
import Posts from '../../Components/Posts/Posts';
import API from '../../api';
import { useLocation } from 'react-router-dom';
import { Box } from "@chakra-ui/react"
import TagSelector from '../../Components/TagSelector';
// import '../../global.scss'

const Home = () => {

  const {search}= useLocation();
  const [posts, setposts] = useState([]);

  useEffect( () => {
    const fetchPosts = async () =>{
      await API.get("/posts"+search)
      .then( res =>{
        setposts(res.data);
      })
    };
    fetchPosts();
  }, [search])
  

  return (
    <Box className='Home' 
    display='flex'
    flexDirection='column'>
        <Header/>
        <TagSelector />
        <Box className="content" 
        display='flex'
        flexDirection='column'
        marginTop='2rem'
        backgroundColor='#222629'>
          <Posts posts={posts}/>
          <SideBar/>
        </Box>
    </Box>
  )
}

export default Home