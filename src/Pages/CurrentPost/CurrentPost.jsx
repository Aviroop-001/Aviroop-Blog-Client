import './CurrentPost.scss';
import SideBar from '../../Components/SideBar/SideBar';
import SinglePost from '../../Components/SinglePost/SinglePost';

const CurrentPost = () => {
  return (
    <div className= 'CurrentPost'>
        <SinglePost />
        <SideBar />
    </div>
  )
}

export default CurrentPost