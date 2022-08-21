import { Box, Select } from '@chakra-ui/react'
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import API from '../api';

const TagSelector = () => {

    //states
    const [categories, setcategories] = useState([]);
    const [error, setError] = useState('');
    
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
        <Select placeholder='All' width='13vw' float='right' marginRight='5rem'  variant='flushed' colorScheme='teal' color='wheat' textAlign='center' fontSize='1.1rem' padding='5px'>
            <option style={{backgroundColor:'#004545',color:'wheat',textAlign:'center', fontSize:'1.1rem', padding:'5px'}} value='Science'>Science</option>
            <option style={{backgroundColor:'#004545',color:'wheat',textAlign:'center', fontSize:'1.1rem', padding:'5px'}} value='Technology'>Technology</option>
            <option style={{backgroundColor:'#004545',color:'wheat',textAlign:'center', fontSize:'1.1rem', padding:'5px'}} value='Lifestyle'>Lifestyle</option>
            <option style={{backgroundColor:'#004545',color:'wheat',textAlign:'center', fontSize:'1.1rem', padding:'5px'}} value='Movies'>Movies</option>
            <option style={{backgroundColor:'#004545',color:'wheat',textAlign:'center', fontSize:'1.1rem', padding:'5px'}} value='Music'>Music</option>
            <option style={{backgroundColor:'#004545',color:'wheat',textAlign:'center', fontSize:'1.1rem', padding:'5px'}} value='Finance'>Finance</option>
            <option style={{backgroundColor:'#004545',color:'wheat',textAlign:'center', fontSize:'1.1rem', padding:'5px'}} value='Sports'>Sports</option>
            <option style={{backgroundColor:'#004545',color:'wheat',textAlign:'center', fontSize:'1.1rem', padding:'5px'}} value='Environment'>Environment</option>
            <option style={{backgroundColor:'#004545',color:'wheat',textAlign:'center', fontSize:'1.1rem', padding:'5px'}} value='Infrastructure'>Infrastructure</option>
            <option style={{backgroundColor:'#004545',color:'wheat',textAlign:'center', fontSize:'1.1rem', padding:'5px'}} value='Politics'>Politics</option>
            <option style={{backgroundColor:'#004545',color:'wheat',textAlign:'center', fontSize:'1.1rem', padding:'5px'}} value='Pshycology'>Pshycology</option>
        </Select>
    </Box>
  )
}

export default TagSelector