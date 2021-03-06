import "./SideBar.scss";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import { IconButton } from "@material-ui/core";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import API from '../../api';
// import apiHandler from "../../apiHandler";

const SideBar = () => {
  const [categories, setcategories] = useState([]);
  const [error, setError] = useState('');
  useEffect(() => {
    const fetchCategories = async() => {
      await API.get("/categories").then((res) => {
        setcategories(res.data);
        // console.log(res.data);
      }).catch(err => setError(err.message));
    };
    fetchCategories();
  }, []);

  // console.log(error);

  return (
    <div className="SideBar">

      <div className="sidebarCategoriesContainer">
        <hr style={{ width: "15%", margin: "1px auto", background: "grey" }} />
        <h2 className="sidebarCategoriesTitle">Categories</h2>

        <hr style={{ width: "15%", margin: "1px auto", background: "grey" }} />
        <ul className="sidebarCategoriesList">
              {categories?.map((c) =>(
                  <li className="sidebarCategory" key={c._id}>
                    <Link to={`/?cat=${c.category}`} style={{textDecoration:"none",color:"inherit",cursor:"pointer"}}>{c.category}</Link>
                  </li>
              ))}
            </ul>
      </div>

      <div className="sidebarSocialContainer">
        <hr style={{ width: "15%", margin: "1px auto", background: "grey" }} />
        <h2 className="sidebarSocialContainerTitle">Follow Me</h2>

        <hr style={{ width: "15%", margin: "1px auto", background: "grey" }} />
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
      <div className="aboutMe">
        Developed by <span>&#169;AVIROOP BANERJEE</span>
        <p>Undergraduate Student, B.Tech- 2020-2024 <br/>
          Backend Developer</p>
      </div>
    </div>
  );
};

export default SideBar;
