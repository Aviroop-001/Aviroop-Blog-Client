import './Home.scss';
import { useState, useEffect } from 'react';
import Header from '../../Components/Header/Header';
import SideBar from '../../Components/SideBar/SideBar';
import Posts from '../../Components/Posts/Posts';
import API from '../../api';
import { useLocation } from 'react-router-dom';
import { Box, Center } from "@chakra-ui/react"
import TagSelector from '../../Components/TagSelector';
import { Progress } from "@chakra-ui/react";
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
    <Box className="Home" display="flex" flexDirection="column">
      <Header />
      <TagSelector />
      <Box
        className="content"
        display="flex"
        flexDirection="column"
        marginTop="2rem"
        backgroundColor="#222629"
      >
        {posts.length ? (
          <Posts posts={posts} />
        ) : (
          <Center height="10rem" width="100%" color="white">
            <Progress
              size="xl"
              hasStripe
              isIndeterminate
              colorScheme="red"
              backgroundColor="#b8db86"
              height="4px"
              width="60%"
              borderRadius='10px'
            />
          </Center>
        )}

        <SideBar />
      </Box>
    </Box>
  );
}

export default Home