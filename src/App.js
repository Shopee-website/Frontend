import React, { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from 'contexts/UserContext'
import AllRoutes from 'view/routes'

function App() {
    useEffect(() => {
        // Setup local storage
        if (!localStorage.getItem('collapsed')) {
            localStorage.setItem('collapsed', false)
        }
        if (!localStorage.getItem('selected_sidebar_key')) {
            localStorage.setItem('selected_sidebar_key', 1)
        }
        if (!localStorage.getItem('token')) {
            localStorage.setItem('token', null)
        }
        if (!localStorage.getItem('user')) {
            localStorage.setItem('user', null)
        }
    }, [])

    return (
        <BrowserRouter>
            <AuthProvider>
                <AllRoutes />
            </AuthProvider>
        </BrowserRouter>
    )
}

export default App
