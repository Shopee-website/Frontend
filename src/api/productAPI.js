import axiosClient from "./axiosClient";

const productApi = {

    getAllProduct(params){
        const url = '/api/product';
        return axiosClient.get(url, {params})
    },
    getProductByCategoryId(id){
        const url = `/api/product/category/${id}`;
        return axiosClient.get(url)
    },
    
    getProductById(id){
        const url = `/api/product/${id}`;
        return axiosClient.get(url)
    },

};
export default productApi;