import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import useAuth from 'hooks/useAuth'

const AdminRoute = () => {
    const { user } = useAuth()

    if (user.isAdmin) {

       return <Outlet />
        
    } else {
        return <Navigate to="/homepage" />
    }
}

export default AdminRoute
