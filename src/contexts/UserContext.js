import axiosClient from 'api/axiosClient'
import { createContext, useState, useEffect, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import auth from 'api/auth'
import userInfoAPI from 'api/userInfoAPI'
const UserContext = createContext({})

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('token'))
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))

    const providerValue = useMemo(
        () => ({ token, setToken, user, setUser}),
        [token, setToken, user, setUser],
    )

    const navigate = useNavigate()

    useEffect(() => {
        if (token !== 'null') {
            // Set authenticate token to axios
            axiosClient.defaults.headers.common[
                'Authorization'
            ] = `Bearer ${token}`

            // console.log(axiosClient.defaults);
            userInfoAPI.getInfo()
                .then ((response)=> {
                    setUser(response.data.profile)
                    localStorage.setItem(
                        'user',
                        JSON.stringify( response.data.profile),
                    )
                })
                .catch((error) => {
                                console.log(error)
                            })

        } else {
            // User logout
            setUser('null')
            localStorage.setItem('token', null)
            localStorage.setItem('user', null)
        }
    }, [token, navigate])

    return (
        <UserContext.Provider value={providerValue}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext
