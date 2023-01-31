import { Box, Menu, MenuButton, Select, Button, MenuList, MenuItem, Tooltip } from '@chakra-ui/react'
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import API from '../api';

const TagSelector = () => {

    //states
    const [categories, setcategories] = useState([]);
    const [category, setcategory] = useState();
    
    //functions
    const fetchCategories = async() => {
        try {
            const res = await API.get("/categories");
            setcategories(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

  return (
    <Box color='teal'>
        <Menu colorScheme='teal' >
        <Tooltip hasArrow label='Filter by tags' fontSize='14px' bg='cyan.100' color='black'>
  <MenuButton as={Button} width={{base: '8rem', md: '10rem', lg: '12rem'}} float='right' marginRight={{base:'2rem', md:'5rem'}} color='wheat' textAlign='center' fontSize='1.1rem' padding='5px' background='transparent' _hover={{background:'teal.900'}} _active={{color:'wheat'}} borderBottom='teal 2px solid' borderRadius='1px' rightIcon={< ArrowDropDownIcon/>}>
    {category ? category: <>All</>}
  </MenuButton>
  </Tooltip>
  <MenuList backgroundColor='teal.900' minWidth='-moz-fit-content' width='max-content'>
    <Link to={`/`} style={{textDecoration:"none",color:"inherit",cursor:"pointer"}}>
        <MenuItem color='wheat' textAlign='center' fontSize='1.1rem' padding='5px auto' _hover={{color:'teal.900'}} onClick={(e)=> {setcategory("All")}}>
            All
        </MenuItem>
    </Link>
    {categories?.map((c) =>(
      <Link to={`/?cat=${c.category}`} key={c.id} style={{textDecoration:"none",color:"inherit",cursor:"pointer"}}>
        <MenuItem color='wheat' textAlign='center' fontSize='1.1rem' padding='5px auto' _hover={{color:'teal.900'}} onClick={(e)=> {setcategory(c.category); console.log(c.category)}}>
            {c.category} 
        </MenuItem>
      </Link>
    ))}
  </MenuList>
</Menu>
    </Box>
  )
}

export default TagSelector