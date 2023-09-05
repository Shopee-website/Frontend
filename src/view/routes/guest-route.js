import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import useAuth from 'hooks/useAuth'


const GuestRoute = () => {
    const {user} = useAuth();

    if(user === 'null') {
        return <Outlet />

    } else {
            return <Navigate to={'/homepage'} />
    }
}

export default GuestRoute
