import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import useAuth from 'hooks/useAuth'

const AuthenticatedRoute = () => {
    const { user } = useAuth()

    if (user !== 'null' && user.isAdmin === false ) {
        return <Outlet />
    } else {

        if(user.isAdmin) {
        return <Navigate to={'/admin'} />
        }
        return <Navigate to="/login" />
    }
}

export default AuthenticatedRoute
