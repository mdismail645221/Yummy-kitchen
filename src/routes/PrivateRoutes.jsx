import React, {useContext} from 'react';
import { AuthConext } from '../context/AuthProvider';
import {useLocation, Navigate} from 'react-router-dom'

const PrivateRoutes = ({children}) => {

    const location = useLocation()
    const {user, loading} = useContext(AuthConext);
    

    if(loading){
        return (
            <div className="w-16 border-4 border-dashed rounded-full animate-spin dark:border-orange-400 h-screen mx-auto"></div>
        )
    }

    if(!user){
        <Navigate to='/login' state={{from: location}} replace />
    }

    return children;


};

export default PrivateRoutes;