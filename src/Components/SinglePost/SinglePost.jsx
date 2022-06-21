import './SinglePost.scss';
import { useState, useEffect } from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditIcon from '@material-ui/icons/Edit';
import {IconButton} from '@material-ui/core';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { Context } from "../../context/Context";
import API from '../../api';

const SinglePost = () => {

    const { user, dispatch, isFetching } = useContext(Context);

    const location= useLocation();
    const currPostid = location.pathname.split("/")[2];
    
    const [post, setpost] = useState({})
    useEffect(() => {
        const getPost = async () =>{
            await API.get(`/posts/${currPostid}`)
            .then( res =>{
                setpost(res.data);
            })
            .catch(err => console.log(err));
        };
        getPost();
    }, [currPostid])
    
    const deleteHandler = async() =>{
        try {
            await API.delete("/posts/"+currPostid);
            window.location.replace("/")
        } catch (err) {
            console.log(err);
        }
    }
    const [title, settitle] = useState("");
    const [content, setcontent] = useState("");
    const [editingMode, seteditingMode] = useState(false);
    const editHandler = async() =>{
        try {
            console.log("handling edit")
            await API.put(`/posts/${currPostid}`,{
                title,
                content
            });
            seteditingMode(false);
            window.location.replace(`/`)
        }
        catch (err) {
            console.log(err)
        }
    }

  return (
    <div className='SinglePost'>
        <div className="imageContainer">
            <img src={post.image} alt="" />
        </div>
        {editingMode ? (
            <input
            type="text"
            autoComplete="off"
            className="postTitleEdit"
            autoFocus='on'
            onChange={ (e)=> settitle(e.target.value) }
          />
        ): (
            <div className="postTitle">
            {post.title}
            {post.author === user.username && 
            <div className="buttons">
                <IconButton onClick={(e) => {seteditingMode(true)}}>
                    <EditIcon style={{color: "lime", opacity:"0.8"}} />
                </IconButton>
                <IconButton onClick={deleteHandler}>
                    <DeleteOutlineIcon style={{color: "crimson", opacity:"1"}} />
                </IconButton>
            </div>
            }
        </div>
        )
        }
        <div className="postinfo">
            <Link to={`/?user=${post.author}`} style={{textDecoration:"none",color:"black",cursor:"pointer"}}>
                <div className="authorName">{post.author}</div>
            </Link>
            <div className="timeStamp">
                {/* DATE */}
                {new Date(post.createdAt).toDateString()}
            </div>
        </div>
        {editingMode ? (
            <textarea
                type="text"
                className="postDescEdit"
                autoComplete="off"
                onChange={ (e)=> setcontent(e.target.value) }
            />
        ) : (
            <div className="postDesc">
                {post.content}
            </div>
        )}
        {editingMode &&
            <IconButton className='updateButton' onClick={editHandler}>
                Update
            </IconButton>
        }
    </div>
  )
}

export default SinglePost