import { Link } from 'react-router-dom';
import './Post.scss';

const Post = ({post}) => {

  return (
    <div className='Post'>
      <Link to={`/post/${post._id}`} style={{textDecoration:"none", color:"black"}}>
        <div className="imageContainer">
          <img className='postImage' src={post.image} alt="" />
        </div>
        
          <div className="postTitleTemporary">{post.title}</div>
        <div className="data">
          <Link to={`/post/${post._id}`} style={{textDecoration:"none", color:"black"}}>
            <div className="postTitle">{post.title}</div>
          </Link>
          <div className="categoryContainer">
            {post.categories.map((c) =>(
              <span key ={Math.floor((Math.random()*10000)+1)} className="categories">{c}</span>
            ))}
          </div>
          <div className="timeStamp">{new Date(post.createdAt).toDateString()}</div>
          <div className="postContent">{post.content}</div>
        </div>
      </Link>
    </div>

  )
}

export default Post