import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import useAuth from 'hooks/useAuth'

const AuthenticatedRoute = () => {
    const { user } = useAuth()

    if (user !== 'null') {
        return <Outlet />
        // return rest.acceptedRoles.includes(user.role) ? (
        //     <Outlet />
        // ) : (
        //     <Navigate to="/404" />
        // )
    } else {
        return <Navigate to="/login" />
    }
}

export default AuthenticatedRoute
