import {axiosClient2} from "./axiosClient";

const reviewApi = {

    getAllReview(productID){
        const url = `feedback/get-by-product/${productID}`;
        return axiosClient2.get(url)
    }
    // updateReview(productID){
    //     const url = `/product/${productID}`;
    //     return axiosClient2.patch(url);
    // },
    // deleteAdminProduct(productID){
    //     const url = `/product/${productID}`;
    //     return axiosClient2.delete(url);
    // },
    // addAdminProduct(params){
    //     const url = '/product';
    //     return axiosClient2.post(url,{params});
    // }
};
export default reviewApi;