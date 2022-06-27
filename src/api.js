import axios from 'axios';

export default axios.create({
  // //! Localhost SERVER
  // baseURL: `http://localhost:5000/api/`

  // //! LIVE SERVER
  baseURL: `https://aviroop-blog-api.herokuapp.com/api`
});