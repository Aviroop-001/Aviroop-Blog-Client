import './Settings.scss';
import SideBar from '../../Components/SideBar/SideBar';
import PersonIcon from '@material-ui/icons/Person';
import { useState} from 'react';
import { useContext } from 'react';
import {Context} from '../../context/Context';
import { IconButton } from '@material-ui/core';
import API from '../../api';


const Settings = () => {

    const {user, dispatch, isFetching} = useContext(Context);
    const [file, setfile] = useState(null);
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [email, setemail] = useState("");

    const updateHandler = async (e) => {
        e.preventDefault();
        const updatedUser = {
            // userID: user._id,
            username,
            email,
            password
        };
        if(file){
            const data = new FormData();
            const fileName = Date.now() + file.name;
            data.append("file", file);
            data.append("name", fileName);
            updatedUser.profilepic = fileName;
            //FIXME: Data is not being sent as a request to backend
            try {
              await API.post("/upload", data);
              console.log("Form Data sent to Server");
            }
            catch (err) {}
        }
        try {
          const res = await API.put(`/user/${user._id}`, updatedUser);
          console.log('User Updated Successfully !!!');
        }
        catch (error) {}
    };

  return (
    <div className='Settings'>
        <div className="settingsContainer">
            <div className="settingsHeader">
                <span className='mainHeading'>Update Account Credentials</span>
                <span className='deleteHeading'>Delete Account</span>
            </div>
            <form className="settingsForm" onSubmit={updateHandler}>
                <label htmlFor="">Profile Picture</label>
                <div className="profilePictureSettings">
                    <img src={user.profilepic} alt="" />
                    <label htmlFor="fileInput">
                        <PersonIcon />
                    </label>
                    <input type="file"
                        id='fileInput' 
                        style={{display: 'none'}}
                        onChange={ (e)=> setfile(e.target.files[0]) }/>
                </div>

                <label htmlFor="" className='fieldLabels'>Username</label>
                <input type="text"
                    className='inputFields'
                    placeholder={user.username}
                    autoComplete='off'
                    autoFocus='on' 
                    onChange={ (e)=> setusername(e.target.value) }/>

                <label htmlFor="" className='fieldLabels'>Email</label>
                <input type="text"
                    className='inputFields'
                    placeholder={user.email}
                    autoComplete='off'
                    onChange={ (e)=> setemail(e.target.value) }/>

                <label htmlFor="" className='fieldLabels'>Password</label>
                <input type="text"
                    className='inputFields'
                    autoComplete='off'
                    onChange={ (e)=> setpassword(e.target.value) }/>

                <IconButton className="updateBtn"
                type='submit'>
                    Update
                </IconButton>
            </form>
        </div>
        <SideBar />
    </div>
  )
}

export default Settings