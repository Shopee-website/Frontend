import  axiosClient from "./axiosClient";


const userApi = {

    getAllUser(params){
        const url = '/api/admin/all-user';
        return axiosClient.get(url, {params})
    },
    
    getUserByID(userId){
        const url = `/api/admin/all-user/${userId}`;
        return axiosClient.get(url)
    },
    
};
export default userApi;