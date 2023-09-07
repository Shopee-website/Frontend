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
    updateProductById(id, params){
        const url = `/api/product/${id}`
        return axiosClient.patch(url, params) 
    }
};
export default productApi;