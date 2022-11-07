import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import {getAuth, onAuthStateChanged, signInWithEmailAndPassword} from 'firebase/auth'

export const AuthConext = createContext();
const auth = getAuth(app)


const AuthProvider = ({children}) => {
    const [user, setUser]=useState({name: "abc"});
    const [loading, setLoading]=useState(true);



    const LogIn = (email, password)=> {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }





    // onAuthStateChanged
    useEffect(()=>{
        const unSubcribed = onAuthStateChanged(auth, (currentUser)=>{
            console.log('onsateChaged', currentUser)
        })
        return ()=> {
            unSubcribed();
        }
    },[])


    const authInfo = {
        user,
        LogIn,
    }
    return (
        <AuthConext.Provider value={authInfo}>
            {children}
        </AuthConext.Provider>
    );
};

export default AuthProvider;