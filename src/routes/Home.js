import React, { useEffect, useState } from "react";
import {authService, dbService, storageService} from "fbase";
import Aweet from "components/Aweet";
import AweetStore from "components/AweetStore";

const Home = ({userObj}) => {

    const [aweets, setAweets] = useState([]);

    useEffect(() => {
        dbService.collection("aweets").onSnapshot(snapshot => {
            const aweetArray = snapshot.docs.map(doc =>({id:doc.id, ...doc.data()}));
            setAweets(aweetArray);
        })
    }, [])

    return(
        <div>
            <AweetStore userObj={userObj} />
            <div>
                {aweets.map((aweet) => (
                    <Aweet 
                    key={aweet.id} 
                    aweetObj={aweet}
                    isOwner={aweet.creatorId === userObj.uid}
                    />
                ))}
            </div>
        </div>
    )
}


export default Home;