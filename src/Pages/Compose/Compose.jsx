import "./Compose.scss";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { Avatar, IconButton } from "@material-ui/core";
import { useState, useEffect } from "react";
import axios from "axios";
import swal from 'sweetalert';

import { useContext } from "react";
import { Context } from "../../context/Context";


const Compose = () => {
  const [title, settitle] = useState("");
  const [content, setcontent] = useState("");
  const [file, setfile] = useState(null);
  const [author, setauthor] = useState("");
  const [categories, setcategories] = useState([]);
  const { user, dispatch, isFetching } = useContext(Context);


  const composeHandler = async (e) => {
    e.preventDefault();

    

    const currPost = {
      author: user.username,
      title,
      content,
      categories,
    };

    if(file){
        const data = new FormData();
        const fileName = Date.now() + file.name;
        data.append("file", file);
        data.append("name", fileName);
        // const data = {"file":file, "name": fileName}
        currPost.image = fileName;
        // for (var pair of data.entries()) {
        //   console.log(pair[0]+ ', ' + pair[1]); 
        // }
        //FIXME: Data is not being sent as a request to backend
        try {
          await axios.post("/upload", data);
          console.log("Form Data sent to Server");
        }
        catch (err) {
          console.log(err);
        }
    }

    try {
      const res = await axios.post("/posts", currPost);
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


  //TODO: JS for on click of checkboxes
  var checkedBoxes =[];
  
  const checkHandler = (e) =>{
    if(e.target.checked){
      checkedBoxes.push(e.target.value);
    }
    else{
      var foundIndex = checkedBoxes.indexOf(e.target.value);
      checkedBoxes.splice(foundIndex, 1);
    }
    console.log(checkedBoxes);
  }
  return (
    <div className="Compose">
      {file && 
        <div className="imageContainer">
          <img
            src={URL.createObjectURL(file)}
            className="postImage"
            alt=""
            />
        </div>
      }
      <form className="postComposer" onSubmit={composeHandler}>
        <label htmlFor="inputFile">
          {/* <IconButton> */}
          <AddCircleOutlineIcon style={{ color: '#86C232', fontSize: "3rem" }} />
          {/* </IconButton> */}
        </label>

        {/* //TODO: The categories are selected here */}
        <div className="categoryContainer">
          <input type="checkbox"
            id="Technology" 
            name="category1" 
            value="Technology" 
            onChange={checkHandler}
          />
          <label htmlFor="Technology">Technology</label>
          <input type="checkbox" 
            id="Music" 
            name="category2" 
            value="Music"
            onChange={checkHandler}/>
          <label htmlFor="Music">Music</label>
          <input type="checkbox"
            id="LifeStyle" 
            name="category3" 
            value="LifeStyle"
            onChange={checkHandler}/>
          <label htmlFor="LifeStyle">LifeStyle</label>
          <input type="checkbox" 
            id="Movies" 
            name="category4" 
            value="Movies"
            onChange={checkHandler}/>
          <label htmlFor="Movies">Movies</label>
          <input type="checkbox" 
            id="Pshycology" 
            name="category5" 
            value="Pshycology"
            onChange={checkHandler}/>
          <label htmlFor="Pshycology">Pshycology</label>
          <input type="checkbox" 
            id="Science" 
            name="category6" 
            value="Science"
            onChange={checkHandler}/>
          <label htmlFor="Science">Science</label>
        </div>
      {/* //TODO: Category Container ends here*/}

        <input
          type="file"
          id="inputFile"
          autoComplete="off"
          style={{ display: "none" }}
          onChange={ (e)=> setfile(e.target.files[0]) }
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

        <button className="postBtn" type="submit" onClick={() => setcategories(checkedBoxes)} >
          Post
        </button>
      </form>
    </div>
  );
};


export default Compose;
