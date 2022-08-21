import './Posts.scss';
import Post from '../Post/Post';
import { Box } from '@chakra-ui/react';

const Posts = ({posts}) => {
  return (
    <Box className='Posts' display='flex'
    justifyContent='space-evenly'
    flexWrap='wrap'
    margin='1rem 0.5rem'>
      {posts.map( (p) => (
        <Post key={p._id} post={p}/>
      ))}
    </Box>
  )
}

export default Posts