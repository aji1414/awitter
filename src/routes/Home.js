import React, { useState } from "react";
import {authService, dbService} from "fbase";

const Home = () => {

    const [aweet, setAweet] = useState("");

    const onSubmit = async event => {
        event.preventDefault();
        await dbService.collection("aweets").add({
            aweet:aweet,
            createdAt: Date.now()
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
        </div>
    )
}


export default Home;