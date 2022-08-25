import './Posts.scss';
import Post from '../Post/Post';
import { Box, Progress } from '@chakra-ui/react';

const Posts = ({posts}) => {
  return (
    <Box className='Posts' display='flex'
    justifyContent='space-evenly'
    flexWrap='wrap'
    margin='1rem 0.5rem'>
      {posts ? posts.map( (p) => (
        <Post key={p._id} post={p}/>
      )) :
      <Progress isIndeterminate height='2px' width='100%' colorScheme='red' />
      }
    </Box>
  )
}

export default Posts