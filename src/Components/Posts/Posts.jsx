import './Posts.scss';
import Post from '../Post/Post';

const Posts = ({posts}) => {
  return (
    <div className='Posts'>
      {posts.map( (p) => (
        <Post key={p._id} post={p}/>
      ))}
    </div>
  )
}

export default Posts