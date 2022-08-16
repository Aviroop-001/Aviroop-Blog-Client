import { Box } from '@chakra-ui/react';
import React from 'react'
import './About.scss';

const About = () => {
  return (
    <Box className='About'
    padding={{base: '110px 1rem', md:'110px 1.5rem'}}
    fontSize='1.1rem'>
        <Box className="aboutApp">
          <Box className="title"
          textAlign='center'
          fontSize='1.4rem'
          textDecoration='underline'>MERN stack Blog App</Box>
          <Box className="description"
          padding= {{base: '1rem 2rem', md:'1rem 6rem'}}>
            <span>Blogetra</span> is a Full stack Blogging App for Blog writers. Its free for all and the developer encourages FREE SPEECH FOR ALL. This website ensures privacy, dynamic components and easy-to-use interface.
          </Box>
          <Box className="features">
            <h2>Salient Features</h2>
            <ul>
              <li>Multi-User Portal</li>
              <li>Fail-safe Authentication</li>
              <li>Ensured Privacy with encripted passwords</li>
              <li>Attractive UI</li>
              <li>Filter by categories- See what you like</li>
            </ul>
          </Box>
          <Box className="aboutMe"
          textAlign='center'
          margin='2rem'
          marginTop='5rem'>
            Developed by <span>&#169;AVIROOP BANERJEE</span>
            <p>Undergraduate Student, B.Tech- 2020-2024 <br/>
             Backend Developer</p>
          </Box>
        </Box>
    </Box>
  )
}

export default About