import axiosClient, {axiosClient2} from "./axiosClient";


const categoryApi = {

    getAllCategory(params){
        const url = '/categories';
        return axiosClient.get(url, {params})
    },

    getAllCategory2(params){
        const url = '/category';
        return axiosClient2.get(url, {params})
    },
    
    getCategoryByID(categoryID){
        const url = `/categories/${categoryID}`;
        return axiosClient.get(url)
    },
   
};
export default categoryApi;