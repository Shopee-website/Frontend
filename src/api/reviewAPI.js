import {axiosClient2 as axiosClient} from "./axiosClient";

const reviewApi = {

    getAllReview(productID){
        const url = `/api/feedback/get-by-product/${productID}`;
        return axiosClient.get(url)
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