import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, updateProfile} from 'firebase/auth'

export const AuthConext = createContext();
const auth = getAuth(app)


const AuthProvider = ({children}) => {
    const [user, setUser]=useState({name: "abc"});
    const [loading, setLoading]=useState(true);





    const  createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (profile) => {
        setLoading(true)
        return updateProfile(auth.currentUser, profile)
    }




    const logIn = (email, password)=> {
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
        createUser,
        logIn,
        updateUser,
    }
    return (
        <AuthConext.Provider value={authInfo}>
            {children}
        </AuthConext.Provider>
    );
};

export default AuthProvider;