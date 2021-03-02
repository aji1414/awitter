import AppRouter from "components/Router";
import React, {useEffect, useState} from "react";
import {authService} from "fbase";

function App() {
    const [init, setInit] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
    const [userObj, setUserObj] = useState(null);

    useEffect(() => {
        authService.onAuthStateChanged((user) => {
            if(user){
                setIsLoggedIn(true);
                setUserObj(user)
            }
            else{
                setIsLoggedIn(false);
                setUserObj(null);
            }
            setInit(true);
        })
    }, [])

    return (
        <>
            {init ? <AppRouter userObj={userObj} isLoggedIn={isLoggedIn} /> : "Initializing"}

        </>
    ) ;
};

export default App;
