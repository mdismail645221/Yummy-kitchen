import React, {useContext} from 'react';
import { AuthConext } from '../context/AuthProvider';
import {useLocation, Navigate} from 'react-router-dom'

const PrivateRoutes = ({children}) => {

    const location = useLocation()
    const {user, loading} = useContext(AuthConext);
    

    if(loading){
        return (
            <div className='h-screen flex items-center'>
                <button className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-orange-400 mx-auto"></button>
            </div>
        )
    }

    if(!user){
        <Navigate to='/login' state={{from: location}} replace />
    }

    return children;


};

export default PrivateRoutes;