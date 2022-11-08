import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'

export const AuthConext = createContext();
const auth = getAuth(app)


const AuthProvider = ({children}) => {
    const [user, setUser]=useState('');
    const [loading, setLoading]=useState(true);




// user create in email , password in authentication form
    const  createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
// user name & photo update authentication form
    const updateUser = (profile) => {
        setLoading(true)
        return updateProfile(auth.currentUser, profile)
    }

// user email password log in 
    const logIn = (email, password)=> {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

// google log in 
    const googleLogIn = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }


// user log out authentication 
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }





    // onAuthStateChanged
    useEffect(()=>{
        const unSubcribed = onAuthStateChanged(auth, (currentUser)=>{
            console.log('onsateChaged', currentUser)
            setUser(currentUser)
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
        googleLogIn,
        logOut
    }
    return (
        <AuthConext.Provider value={authInfo}>
            {children}
        </AuthConext.Provider>
    );
};

export default AuthProvider;