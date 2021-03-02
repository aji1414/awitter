import React, { useEffect, useState } from "react";
import {authService, dbService} from "fbase";

const Home = ({userObj}) => {

    const [aweet, setAweet] = useState("");
    const [aweets, setAweets] = useState([]);

    useEffect(() => {
        dbService.collection("aweets").onSnapshot(snapshot => {
            const aweetArray = snapshot.docs.map(doc =>({id:doc.id, ...doc.data()}));
            setAweets(aweetArray);
        })
    }, [])
    
    const onSubmit = async event => {
        event.preventDefault();
        await dbService.collection("aweets").add({
            text:aweet,
            createdAt: Date.now(),
            creatorId: userObj.uid
        });
        setAweet("");
    };

    const onChange = event => {
        const{target:{value}} = event;

        setAweet(value);
    }

    return(
        <div>
            <form onSubmit={onSubmit}>
                <input 
                type="text" 
                value={aweet}
                onChange={onChange}
                placeholder="What's on your mind"
                max={120}
                />
                <input
                type="submit"
                value="Aweet"
                />
            </form>
            <div>
                {aweets.map((aweet) => (
                    <div key={aweet.id}>
                        <h4>
                            {aweet.text}
                        </h4>
                    </div>
                ))}
            </div>
        </div>
    )
}


export default Home;