import NavBar from './Components/NavBar/NavBar';
import Home from './Pages/Home/Home';
import CurrentPost from './Pages/CurrentPost/CurrentPost';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Compose from './Pages/Compose/Compose';
import Settings from './Pages/Settings/Settings';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { useContext } from 'react';
import {Context} from './context/Context';

function App() {

  const {user} = useContext(Context);

  return (
    <div className="App">
    <Router>
      <NavBar />
      
      {/* //TODO: NavBar is Omnipresent ;) */}
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/register' element={user ? <Home/> : <Register/>} />
        <Route exact path='/login' element={user ? <Home/> : <Login/>} />
        <Route exact path='/compose' element={user ? <Compose/> : <Register/>} />
        <Route exact path='/settings' element={user ? <Settings/> : <Register/>} />
        <Route exact path='/post/:postID' element={<CurrentPost/>} />
      </Routes>
    </Router>

    </div>
  );
}

export default App;
