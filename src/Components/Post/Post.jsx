import { Link } from 'react-router-dom';
import { Box, Image, Text } from '@chakra-ui/react';
import './Post.scss';

const Post = ({post}) => {

  return (
    <Box className='Post'
    width={{ base:'90%', md:'40%'}}
    margin='5px 10px'
    position='relative'>
      <Link to={`/post/${post._id}`} style={{textDecoration:"none", color:"black"}}>
        <Box className='imageContainer'
        width='100%'
        textAlign='center'>
          <Image 
          height='100%'
          width='100%'
          opacity='0.5'
          textAlign='center'
          src={post.image} alt="" />
        </Box>
        
        <Text className='postTitleTemporary'
        position='absolute'
        top='2px'
        left='5px'
        textAlign='center'
        letterSpacing='4px'
        fontStyle='italic'
        fontSize={{base:'1.4rem', md:'2rem'}}>
          {post.title}
        </Text>
        <Box className='categoryContainerTemporary'
        position='absolute'
        bottom='10px'
        left='5px'
          width={{base: '90%', md: '400px'}}
          margin='0 auto'
          display='flex'
          flexWrap='wrap'>
            {post.categories.map((c) =>(
              <span key ={Math.floor((Math.random()*10000)+1)} className="categories">{c}</span>
            ))}
          </Box>
        <Box className='data'
        display='none'
        position='absolute'
        bottom='10px'
        left='0'
        width='100%'>
          <Text className='postTitle'
          textAlign='center'
          letterSpacing='0.6rem'
          fontStyle='bold'
          fontSize={{base:'1.4rem', md:'1.7rem'}}>
            {post.title}
          </Text>
          <Box className='categoryContainer'
          width={{base: '90%', md: '400px'}}
          margin='0 auto'
          display='flex'
          flexWrap='wrap'>
            {post.categories.map((c) =>(
              <span key ={Math.floor((Math.random()*10000)+1)} className="categories">{c}</span>
            ))}
          </Box>
          <Box className='dateContainer'
          width='80%'
          textAlign='right'
          fontStyle='italic'
          fontSize={{base:'0.9rem'}}>
            {new Date(post.createdAt).toDateString()}
          </Box>
          <Box className="postContent"
          textAlign='center'
          padding='5px'
          overflow='hidden'
          textOverflow='ellipsis'>
            {post.content}
          </Box>
        </Box>
      </Link>
    </Box>

  )
}

export default Post