import  {axiosClient2} from "./axiosClient";


const userApi = {

    // getAllCategory(params){
    //     const url = '/categories';
    //     return axiosClient.get(url, {params})
    // },

    getAllUser(params){
        const url = '/admin/all-user';
        return axiosClient2.get(url, {params})
    },
    
    // getCategoryByID(categoryID){
    //     const url = `/categories/${categoryID}`;
    //     return axiosClient.get(url)
    // },
   
};
export default userApi;