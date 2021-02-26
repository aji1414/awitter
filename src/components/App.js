import AppRouter from "components/Router";
import React, {useEffect, useState} from "react";
import {authService} from "fbase";

function App() {
    const [init, setInit] = useState(false);

    const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
    useEffect(() => {
        authService.onAuthStateChanged((user) => {
            if(user){
                setIsLoggedIn(true);
            }
            else{
                setIsLoggedIn(false);
            }
            setInit(true);
        })
    }, [])

    return (
        <>
            {init ? <AppRouter isLoggedIn={isLoggedIn} /> : "Initializing"}
            <footer>&copy; {new Date().getFullYear()} Awitter</footer>
        </>
    ) ;
};

export default App;
