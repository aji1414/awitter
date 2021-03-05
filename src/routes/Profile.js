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

    // const getMyAweets = async () => {
    //     const aweets = await dbService
    //     .collection("aweets")
    //     .where("creatorId", "==", userObj.uid)
    //     // .orderBy("createdAt", "desc")
    //     .get()
    //     console.log(aweets.docs.map(doc => doc.data()))
    // };

    // useEffect(() => {
    //     getMyAweets();
    // }, [])

        

    return(
        <>
        <form onSubmit={onSubmit}>
            <input 
            onChange={onChange}
            type="text" 
            placeholder="Display name" 
            value={newDisplayName}/>
            <input type="submit" value="Update profile" />
        </form>
            <button onClick={onLogOutClick}>Log Out</button>
        </>
    )
}



export default Profile;