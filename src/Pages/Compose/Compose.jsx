//FIXME: Categories is not being posted

import "./Compose.scss";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { useState, useContext, useEffect } from "react";
import { Context } from "../../context/Context";
import swal from 'sweetalert';
import Axios from 'axios';
import API from '../../api';


const Compose = () => {

  //States
  const [title, settitle] = useState("");
  const [content, setcontent] = useState("");
  const [imageURL, setimageURL] = useState("");
  const [categories, setcategories] = useState();
  const { user } = useContext(Context);

  const imageUploadHandler = async (file) =>{
    if(file.type === 'image/jpeg' || file.type === "image/png"){
      const data = new FormData();
      data.append("file", file)
      data.append("upload_preset", "blog-app-assets")
      data.append("cloud_name","aviroop")

      await Axios.post("https://api.cloudinary.com/v1_1/aviroop/image/upload", data)
      .then( (res) => {
        setimageURL(res.data.url.toString());
        console.log("Image uploaded successfully")
      })
      .catch((err)=>{
        console.log(err);
      })
    }
    else {
      console.log("file must be jpeg/png");
    }
  };

  //TODO: JS for on click of checkboxes
  let checkedBoxes =[];
  //Forming the categories array
  const checkHandler = (e) =>{
    if(e.target.checked){
      checkedBoxes.push(e.target.value);
    }
    else{
      var foundIndex = checkedBoxes.indexOf(e.target.value);
      checkedBoxes.splice(foundIndex, 1);
    }
    console.log("checked ", checkedBoxes);
  }

  const composeHandler = async (e) => {
    e.preventDefault();
    // setcategories(checkedBoxes);
    console.log("checked", checkedBoxes);
    console.log("cats", categories);
    const currPost = {
      //! For LocalHost
      // author: user.data.username,
      // ! For Live Site-----------------------
      author: user.username,
      title,
      content,
      categories,
      image: imageURL,
    };
    try {
      const res = await API.post("/posts", currPost);
      console.log('Posting Successful !!!')
      swal({
        title: "Posted Successfully ;>",
        icon: "success",
      });
      window.location.replace("/post/"+ res.data._id);
    }
    catch (er) {
      console.log(er);
    }
  };

  return (
    <div className="Compose">
      {imageURL && 
        <div className="imageContainer">
          <img
            src={imageURL}
            className="postImage"
            alt="" />
        </div>
      }
      <form className="postComposer" method="post" onSubmit={(e)=> composeHandler(e) }>
        <label htmlFor="inputFile">
          {/* <IconButton> */}
          <AddCircleOutlineIcon style={{ color: '#86C232', fontSize: "3rem", margin:"2rem" }} />
          {/* </IconButton> */}
        </label>

        {/* //TODO: The categories are selected here */}
        <div className="categoryContainer">
          <input type="checkbox"
            id="Technology" 
            name="category1" 
            value="Technology" 
            onChange={(e) => checkHandler(e)}
          />
          <label htmlFor="Technology">Technology</label>
          <input type="checkbox" 
            id="Music" 
            name="category2" 
            value="Music"
            onChange={(e) => checkHandler(e)}/>
          <label htmlFor="Music">Music</label>
          <input type="checkbox"
            id="LifeStyle" 
            name="category3" 
            value="LifeStyle"
            onChange={(e) => checkHandler(e)}/>
          <label htmlFor="LifeStyle">LifeStyle</label>
          <input type="checkbox" 
            id="Movies" 
            name="category4" 
            value="Movies"
            onChange={(e) => checkHandler(e)}/>
          <label htmlFor="Movies">Movies</label>
          <input type="checkbox" 
            id="Pshycology" 
            name="category5" 
            value="Pshycology"
            onChange={(e) => checkHandler(e)}/>
          <label htmlFor="Pshycology">Pshycology</label>
          <input type="checkbox" 
            id="Science" 
            name="category6" 
            value="Science"
            onChange={(e) => checkHandler(e)}/>
          <label htmlFor="Science">Science</label>
          <input type="checkbox" 
            id="Finance" 
            name="category6" 
            value="Finance"
            onChange={(e) => checkHandler(e)}/>
          <label htmlFor="Finance">Finance</label>
          <input type="checkbox" 
            id="Sports" 
            name="category6" 
            value="Sports"
            onChange={(e) => checkHandler(e)}/>
          <label htmlFor="Sports">Sports</label>
          <input type="checkbox" 
            id="Politics" 
            name="category6" 
            value="Politics"
            onChange={(e) => checkHandler(e)}/>
          <label htmlFor="Politics">Politics</label>
          <input type="checkbox" 
            id="Environment" 
            name="category6" 
            value="Environment"
            onChange={(e) => checkHandler(e)}/>
          <label htmlFor="Environment">Environment</label>
          <input type="checkbox" 
            id="Infrastructure" 
            name="category6" 
            value="Infrastructure"
            onChange={(e) => checkHandler(e)}/>
          <label htmlFor="Infrastructure">Infrastructure</label>
          <button className="postBtn" id="catsBtn"  onClick={(e)=>setcategories(checkedBoxes)}>
          Set Tags
        </button>
        </div>
        {/* <button className="postBtn" id="catsBtn"  onClick={(e)=>setcategories(checkedBoxes)}>
          Set Tags
        </button> */}
        {/* //TODO: Category Container ends here*/}

        <input
          type="file"
          id="inputFile"
          autoComplete="off"
          style={{ display: "none" }}
          onChange={ (e)=> imageUploadHandler(e.target.files[0]) }
        />
        <input
          type="text"
          id="inputTitle"
          placeholder="Title"
          autoFocus="on"
          autoComplete="off"
          onChange={ (e)=> settitle(e.target.value) }
        />
        <textarea
          type="text"
          id="inputContent"
          placeholder="Write Blog"
          autoComplete="off"
          onChange={ (e)=> setcontent(e.target.value) }
        />

        <button className="postBtn"  type='submit'>
          Post
        </button>
      </form>
    </div>
  );
};

export default Compose;