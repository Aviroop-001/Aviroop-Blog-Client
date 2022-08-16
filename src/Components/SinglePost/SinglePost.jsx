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
import { Box, Image, Tooltip } from '@chakra-ui/react';

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
    <Box className='SinglePost'>
        <Box className="postTitle"
        textAlign='center'
        fontSize='2.5rem'
        letterSpacing='3px'
        margin='1rem'>
        {post.title}
        {post.author === user.username && 
            <Box className="buttons"
            float='right'>
                <Tooltip hasArrow label='Delete Post' bg='red.600' color='wheat'>
                    <IconButton onClick={deleteHandler}>
                        <DeleteOutlineIcon style={{color: "crimson", opacity:"1"}} />
                    </IconButton>
                </Tooltip>
            </Box>
        }
        </Box>
            <Box className="imageContainer"
            width='100%'
            height='50vh'
            textAlign='center'>
                <Image src={post.image} alt="" 
                height='100%'
                width='80%'
                objectFit='contain'
                margin='0px auto'
                borderRadius='0.4rem'/>
            </Box>
        <Box className="postinfo"
        display='flex'
        justifyContent='space-between'
        flexDirection='column'
        paddingLeft='3rem'
        margin='1rem'>
                By:- <Box className="authorName"  fontSize='1.7rem' letterSpacing='4px'>
                        {post.author}
                    </Box>
                <Box className="timeStamp">
                    {/* DATE */}
                    {new Date(post.createdAt).toDateString()}
                </Box>
                <Box className="morePosts"
                textAlign='center'
                display='flex'
                alignItems='center'
                alignSelf='flex-end'
                marginRight='2rem'
                fontSize='1.2rem'>
                    More posts by &nbsp; <Link to={`/?user=${post.author}`} style={{textDecoration:"none",color:"black",cursor:"pointer"}}>
                    <Tooltip hasArrow label='See more posts by author' bg='green.600' color='wheat'>
                    <Box className="authorNameMorePosts"
                    display='inline-block'
                    letterSpacing='2px'
                    fontSize='2rem'
                    cursor='pointer'
                    fontStyle='italic'>{post.author}</Box>
                    </Tooltip>
                </Link>
                </Box>
        </Box>
        <Box className="postDesc"
        textAlign='center'
        margin='1rem'
        fontSize='1.1rem'>
            {post.content}
        </Box>
    </Box>
  )
}

export default SinglePost