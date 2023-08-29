import { useContext } from 'react'
import UserContext from 'contexts/UserContext'

const useAuth = () => {
    return useContext(UserContext)
}

export default useAuth
