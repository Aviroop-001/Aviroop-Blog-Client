import { Link } from 'react-router-dom';
import './Post.scss';

const Post = ({post}) => {

  return (
    <div className='Post'>
        <div className="imageContainer">
            <img className='postImage' src={post.image} alt="" />
        </div>
        <div className="categoryContainer">
          {post.categories.map((c) =>(
            <span key ={Math.floor((Math.random()*10000)+1)} className="categories">{c}</span>
          ))}
        </div>
        <Link to={`/post/${post._id}`} style={{textDecoration:"none", color:"black"}}>
          <div className="postTitle">{post.title}</div>
        </Link>
        <div className="timeStamp">{new Date(post.createdAt).toDateString()}</div>
        <div className="postContent">{post.content}</div>
    </div>

  )
}

export default Post