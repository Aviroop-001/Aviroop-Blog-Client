import "./SideBar.scss";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import { IconButton } from "@material-ui/core";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const SideBar = () => {
  const [categories, setcategories] = useState([]);
  useEffect(() => {
    const fetchCategories = () => {
      axios.get("/categories").then((res) => {
        setcategories(res.data);
      });
    };
    fetchCategories();
  }, []);

  return (
    <div className="SideBar">
      <hr style={{ width: "85%", margin: "1px auto", background: "grey" }} />
      <h1 className="sidebarTitle">About</h1>

      <hr style={{ width: "85%", margin: "1px auto", background: "grey" }} />
      <img src="Assets\Images\nature-gbb91b4047_1920.jpg" alt="" />
      <p className="sidebarContent">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nihil
        aperiam beatae dignissimos quod impedit sunt ipsa? Modi, repudiandae.
        Accusamus.
      </p>

      <div className="sidebarCategoriesContainer">
        <hr style={{ width: "85%", margin: "1px auto", background: "grey" }} />
        <h2 className="sidebarCategoriesTitle">Categories</h2>

        <hr style={{ width: "85%", margin: "1px auto", background: "grey" }} />
        <ul className="sidebarCategoriesList">
              {categories.map( (c) =>(
                  <li className="sidebarCategory" key={c._id}>
                    <Link to={`/?cat=${c.category}`} style={{textDecoration:"none",color:"inherit",cursor:"pointer"}}>{c.category}</Link>
                  </li>
              ))}
            </ul>
      </div>

      <div className="sidebarSocialContainer">
        <hr style={{ width: "85%", margin: "1px auto", background: "grey" }} />
        <h2 className="sidebarSocialContainerTitle">Follow Me</h2>

        <hr style={{ width: "85%", margin: "1px auto", background: "grey" }} />
        <div className="sidebarSocialIconsContainer">
          <IconButton>
            <LinkedInIcon />
          </IconButton>
          <IconButton>
            <FacebookIcon />
          </IconButton>
          <IconButton>
            <GitHubIcon />
          </IconButton>
          <IconButton>
            <InstagramIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
