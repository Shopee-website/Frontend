import axiosClient from './axiosClient'

const userInfoAPI = {
    getInfo: () => {
        const url = '/api/user/profile'
        return axiosClient.get(url)
    },
}

export default userInfoAPI;