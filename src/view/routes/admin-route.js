import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import useAuth from 'hooks/useAuth'

const AdminRoute = () => {
    const { user } = useAuth()

    if (user !== 'null') {

       return  user.isAdmin ? (
                 <Outlet />
        ) : (
             <Navigate to="/homepage" />
        )
        
    } else {
        return <Navigate to="/login" />
    }
}

export default AdminRoute
