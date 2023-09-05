import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import useAuth from 'hooks/useAuth'

const UserRoute = () => {
    const { user } = useAuth()

    if (user !== 'null' ) {
        return <Outlet />
    } else {
             return <Navigate to="/login" />
    }
}

export default UserRoute
