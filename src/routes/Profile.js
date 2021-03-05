import React, { useEffect, useState } from "react";
import {authService, dbService} from "fbase";
import { useHistory } from "react-router-dom"; 
            

const Profile = ({refreshUser, userObj}) => {
    const [newDisplayName, setNewDisplayName] = useState(userObj.displayName)

    let history = useHistory();

    const onLogOutClick = () => {
        authService.signOut();
        history.push("/");
    }

    const onChange = event => {
        const {target:{value}} = event;
        setNewDisplayName(value);
    }

    const onSubmit = async event => {
        event.preventDefault();
        if(userObj.displayName !== newDisplayName){
            await userObj.updateProfile({
                displayName:newDisplayName
            })
            refreshUser();
        }
    }

      

    return(
        <div className="container">
            <form onSubmit={onSubmit} className="profileForm">
                <input 
                onChange={onChange}
                type="text"
                autoFocus 
                className="formInput"
                placeholder="Display name" 
                value={newDisplayName}/>
                <input
                    type="submit"
                    value="Update Profile Name"
                    className="formBtn"
                    style={{
                        marginTop: 10,
                    }}
                />
            </form>
            <span className="formBtn cancelBtn logOut" onClick={onLogOutClick}>
                Log Out
            </span>        
        </div>
    )
}



export default Profile;