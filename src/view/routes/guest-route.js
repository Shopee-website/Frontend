import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import useAuth from 'hooks/useAuth'


const GuestRoute = () => {
    const { user, token } = useAuth()

    if (user !== 'null' && token !== 'null') {

        // user.isAdmin ? 
        // <Navigate to={'/admin'} /> 
        // :
        <Navigate to={'/homepage'} />
    }

    return <Outlet />
}

GuestRoute.defaultProps = {
    location: {},
}

export default GuestRoute
