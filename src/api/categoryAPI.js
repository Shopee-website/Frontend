import axiosClient from "./axiosClient";


const categoryApi = {

    getAllCategory(params){
        const url = '/api/category';
        return axiosClient.get(url, {params})
    },

    getCategoryByID(categoryID){
        const url = `/category/${categoryID}`;
        return axiosClient.get(url)
    },
   
};
export default categoryApi;