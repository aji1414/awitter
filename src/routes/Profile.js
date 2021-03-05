import React, { useEffect } from "react";
import {authService, dbService} from "fbase";
import { useHistory } from "react-router-dom"; 
            

const Profile = ({userObj}) => {
    let history = useHistory();

    const onLogOut = () => {
        authService.signOut();
        history.push("/");
    }

    const getMyAweets = async () => {
        const aweets = await dbService
        .collection("aweets")
        .where("creatorId", "==", userObj.uid)
        // .orderBy("createdAt", "desc")
        .get()
        console.log(aweets.docs.map(doc => doc.data()))
    };

    useEffect(() => {
        getMyAweets();
    }, [])

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