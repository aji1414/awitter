import React from "react";
import {authService} from "fbase";
import { useHistory } from "react-router-dom"; 
            

const Profile = () => {
    let history = useHistory();

    const onLogOut = () => {
        authService.signOut();
        history.push("/");
    }

    return(
        <div>
            <span>Profile</span>
            <button onClick={onLogOut}>
                Log Out
            </button>
        </div>
    
    )
}



export default Profile;