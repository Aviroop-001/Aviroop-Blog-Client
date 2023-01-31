import "./Compose.scss";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { useState, useContext, useEffect } from "react";
import { Context } from "../../context/Context";
import swal from "sweetalert";
import Axios from "axios";
import API from "../../api";
import { Box, Button, Checkbox, CheckboxGroup, useToast, Tooltip, Textarea} from "@chakra-ui/react";

const Compose = () => {
  //States
  const [title, settitle] = useState("");
  const [content, setcontent] = useState("");
  const [imageURL, setimageURL] = useState("");
  const [categories, setcategories] = useState();
  const [fileName, setfileName] = useState("");
  const { user } = useContext(Context);

  //functions
  const toast= useToast();
  const imageUploadHandler = async (file) => {
    if (file.type === "image/jpeg" || file.type === "image/png") {
      setfileName(file.name);
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", "blog-app-assets");
      data.append("cloud_name", "aviroop");

      await Axios.post(
        "https://api.cloudinary.com/v1_1/aviroop/image/upload",
        data
      )
        .then((res) => {
          setimageURL(res.data.url.toString());
          console.log("Image uploaded successfully");
          toast({
            title: 'Image Uploaded successfully',
            description: "Your image is in the cloud :O",
            status: 'success',
            duration: 3000,
            isClosable: true,
            position: 'top',
          });
        })
        .catch((err) => {
          console.log(err);
          toast({
            title: 'Image uploading crashed :(',
            description: "Couldn't connect to cloud...",
            status: 'error',
            duration: 4000,
            isClosable: true,
            position: 'top',
          });
        });
    } else {
      console.log("file must be jpeg/png");
    }
  };

  //TODO: JS for on click of checkboxes
  let checkedBoxes = [];
  const checkHandler = (e) => {
    if (e.target.checked) {
      checkedBoxes.push(e.target.value);
    } else {
      var foundIndex = checkedBoxes.indexOf(e.target.value);
      checkedBoxes.splice(foundIndex, 1);
    }
    console.log("checked ", checkedBoxes);
  };

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
      console.log("Posting Successful !!!");
      toast({
        title: 'Blog posted successfully',
        description: "Redirecting to your newly posted blog :)",
        status: 'success',
        duration: 4000,
        isClosable: true,
        position: 'top',
      });
      window.location.replace("/post/" + res.data._id);
    } catch (er) {
      console.log(er);
      toast({
        title: 'Blog posting Failed',
        description: "Shit happens :,)",
        status: 'error',
        duration: 4000,
        isClosable: true,
        position: 'top',
      });
    }
  };

  return (
    <Box className="Compose">
      <form
        className="postComposer"
        method="post"
        onSubmit={(e) => composeHandler(e)}
      >
        <Tooltip hasArrow label="Select .jpeg/.png file">
          <label htmlFor="inputFile">
            <Box border="1px dashed grey" padding="3rem 7rem" marginTop="3rem">
              {imageURL && (
                <Box className="imageContainer" textAlign="center">
                  {fileName}
                </Box>
              )}
              <AddCircleOutlineIcon
                style={{ color: "#86C232", fontSize: "3rem" }}
              />
            </Box>
          </label>
        </Tooltip>

        {/* //TODO: The categories are selected here */}
        <CheckboxGroup colorScheme="red" marginTop="3rem">
          <Box
            display="flex"
            flexWrap="wrap"
            width={{ base: "85%", md: "70%" }}
            height={{ base: "25vh", md: "15vh" }}
            alignItems="center"
            justifyContent='center'
            marginTop="3rem"
          >
            <Checkbox
              className="checkBox"
              width={{ base: "40%", md: "20%" }}
              id="Technology"
              name="category1"
              value="Technology"
              color="#86C232"
              onChange={(e) => checkHandler(e)}
            >
              Technology
            </Checkbox>
            <Checkbox
              className="checkBox"
              width={{ base: "40%", md: "20%" }}
              id="Science"
              name="category2"
              value="Science"
              color="#86C232"
              onChange={(e) => checkHandler(e)}
            >
              Science
            </Checkbox>
            <Checkbox
              className="checkBox"
              width={{ base: "40%", md: "20%" }}
              id="Pshycology"
              name="category3"
              value="Pshycology"
              color="#86C232"
              onChange={(e) => checkHandler(e)}
            >
              Pshycology
            </Checkbox>
            <Checkbox
              className="checkBox"
              width={{ base: "40%", md: "20%" }}
              id="Finance"
              name="category4"
              value="Finance"
              color="#86C232"
              onChange={(e) => checkHandler(e)}
            >
              Finance
            </Checkbox>
            <Checkbox
              className="checkBox"
              width={{ base: "50%", md: "20%" }}
              id="Environment"
              name="category5"
              value="Environment"
              color="#86C232"
              onChange={(e) => checkHandler(e)}
            >
              Environment
            </Checkbox>
            <Checkbox
              className="checkBox"
              width={{ base: "40%", md: "20%" }}
              id="Infrastructure"
              name="category6"
              value="Infrastructure"
              color="#86C232"
              onChange={(e) => checkHandler(e)}
            >
              Infrastructure
            </Checkbox>
            <Checkbox
              className="checkBox"
              width={{ base: "40%", md: "20%" }}
              id="LifeStyle"
              name="category7"
              value="LifeStyle"
              color="#86C232"
              onChange={(e) => checkHandler(e)}
            >
              LifeStyle
            </Checkbox>
            <Checkbox
              className="checkBox"
              width={{ base: "40%", md: "20%" }}
              id="Movies"
              name="category8"
              value="Movies"
              color="#86C232"
              onChange={(e) => checkHandler(e)}
            >
              Movies
            </Checkbox>
            <Checkbox
              className="checkBox"
              width={{ base: "40%", md: "20%" }}
              id="Music"
              name="category9"
              value="Music"
              color="#86C232"
              onChange={(e) => checkHandler(e)}
            >
              Music
            </Checkbox>
            <Checkbox
              className="checkBox"
              width={{ base: "40%", md: "20%" }}
              id="Sports"
              name="category10"
              value="Sports"
              color="#86C232"
              onChange={(e) => checkHandler(e)}
            >
              Sports
            </Checkbox>
            <Checkbox
              className="checkBox"
              width={{ base: "40%", md: "20%" }}
              id="Politics"
              name="category10"
              value="Politics"
              color="#86C232"
              onChange={(e) => checkHandler(e)}
            >
              Politics
            </Checkbox>
          </Box>
          <Button
            variant="ghost"
            backgroundColor="#474B4F"
            color="#86C232"
            fontSize="1.2rem"
            padding="0.4rem 0.6rem"
            _hover={{ backgroundColor: "#86C232", color: "green.900" }}
            onClick={(e) => {
              setcategories(checkedBoxes);
              toast({
                title: "Tags set successfully",
                description: "these tags will help users filter the posts",
                position: "top",
                status: "success",
                duration: 3000,
                isClosable: true,
              });
            }}
          >
            Set Tags
          </Button>
        </CheckboxGroup>
        {/* //TODO: Category Container ends here*/}
        <input
          type="file"
          id="inputFile"
          autoComplete="off"
          style={{ display: "none" }}
          onChange={(e) => {
            imageUploadHandler(e.target.files[0]);
            toast({
              title: "Post Image uploaded successfully",
              position: "top",
              status: "success",
              duration: 3000,
              isClosable: true,
            });
          }}
        />
        <Textarea
          type="text"
          id="inputTitle"
          placeholder="Title"
          autoFocus="on"
          autoComplete="off"
          boxShadow="0px 0px 4px #506632"
          colorScheme="teal"
          fontSize="1.6rem"
          padding="0.5rem"
          border="none"
          outline="none"
          width={{ base: "80%", md: "60%" }}
          marginTop="4rem"
          textAlign="center"
          borderRadius="5px"
          letterSpacing="3px"
          onChange={(e) => settitle(e.target.value)}
        />
        <Textarea
          type="text"
          id="inputContent"
          colorScheme="teal"
          placeholder="Write Blog"
          boxShadow="0px 0px 4px #506632"
          autoComplete="off"
          height="17rem"
          borderRadius="5px"
          padding="1rem"
          border="none"
          outline="none"
          width={{ base: "80%", md: "60%" }}
          margin="1rem"
          onChange={(e) => setcontent(e.target.value)}
        />

        <button className="postBtn" type="submit">
          Post
        </button>
      </form>
    </Box>
  );
};

export default Compose;
