import {axiosClient2} from "./axiosClient";

const adminproductApi = {

    getAllAdminProduct(params){
        const url = '/product';
        return axiosClient2.get(url)
    },
    updateAdminProduct(productID){
        const url = `/product/${productID}`;
        return axiosClient2.patch(url);
    },
    deleteAdminProduct(productID){
        const url = `/product/${productID}`;
        return axiosClient2.delete(url);
    },
    addAdminProduct(params){
        const url = '/product';
        return axiosClient2.post(url,{params});
    }
};
export default adminproductApi;