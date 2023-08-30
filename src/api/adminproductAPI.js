import axiosClient from "./axiosClient";

const adminproductApi = {

    getAllAdminProduct(params){
        const url = '/product';
        return axiosClient.get(url)
    },
    updateAdminProduct(productID){
        const url = `/product/${productID}`;
        return axiosClient.patch(url);
    },
    deleteAdminProduct(productID){
        const url = `/product/${productID}`;
        return axiosClient.delete(url);
    },
    addAdminProduct(params){
        const url = '/product';
        return axiosClient.post(url,{params});
    }
};
export default adminproductApi;