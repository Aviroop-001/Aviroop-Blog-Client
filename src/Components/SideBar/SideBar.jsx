import { Box } from "@chakra-ui/react";
import "./SideBar.scss";

const SideBar = () => {
  // const [categories, setcategories] = useState([]);
  // const [error, setError] = useState('');
  // useEffect(() => {
  //   const fetchCategories = async() => {
  //     await API.get("/categories").then((res) => {
  //       setcategories(res.data);
  //       // console.log(res.data);
  //     }).catch(err => setError(err.message));
  //   };
  //   fetchCategories();
  // }, []);

  // console.log(error);

  return (
    <Box className="SideBar" display='flex' flexItems='centre' justifyContent='center' height='30vh'>
      <Box className="aboutMe" width='fit-content' color='rgb(15, 16, 15)' padding='4rem 2px'>
        Developed by <span>&#169;AVIROOP BANERJEE</span>
        <p>Undergraduate Student, B.Tech- 2020-2024 <br/>
          Backend Developer</p>
      </Box>
    </Box>
  );
};

export default SideBar;
