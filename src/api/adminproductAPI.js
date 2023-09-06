
import axiosClient from "./axiosClient";

const adminproductApi = {

    getAllAdminProduct(params){
        const url = '/api/product';
        return axiosClient.get(url)
    },
    updateAdminProduct(productID){
        const url = `/api/product/${productID}`;
        return axiosClient.patch(url);
    },
    deleteAdminProduct(productID){
        const url = `/api/product/${productID}`;
        return axiosClient.delete(url);
    },
    addAdminProduct(params){
        const url = '/api/product';
        return axiosClient.post(url,params);
    }
};
export default adminproductApi;