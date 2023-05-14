import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const useAuth = () => {
    const user = {LoggedIn: false}; 
    return user && user.LoggedIn;
};

const ProtectedRoutes = () => {
    const isAuth = useAuth(); 
    return isAuth ? <Outlet/> : <Navigate to="/login"/>;
}

export default ProtectedRoutes