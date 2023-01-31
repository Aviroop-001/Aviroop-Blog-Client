import { Box, Center } from "@chakra-ui/react";
import "./SideBar.scss";

const SideBar = () => {

  return (
    <Center className="SideBar" display='flex' flexItems='centre' justifyContent='center' height='30vh' textAlign='center'>
      <Box className="aboutMe" width='fit-content' color='rgb(15, 16, 15)' padding='4rem 2px'>
        Developed by <span>&#169;AVIROOP BANERJEE</span>
        <p>Undergraduate Student, B.Tech- 2020-2024 <br/>
          Backend Developer</p>
      </Box>
    </Center>
  );
};

export default SideBar;
