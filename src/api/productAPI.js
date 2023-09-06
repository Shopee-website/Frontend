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
    getProductDetail(id, params){
        const url = `api/product/findProductDetailId/${id}`;
        return axiosClient.get(url, {params})
    },
    getProductById(id){
        const url = `/api/product/${id}`;
        return axiosClient.get(url)
    },

};
export default productApi;