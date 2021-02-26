import React from "react";
import {authService} from "fbase";

const Home = () => {
    return(
        <div>
            <span>Home</span>
            <button onClick={() => authService.signOut()}>Sign Out</button>
        </div>
    )
}


export default Home;