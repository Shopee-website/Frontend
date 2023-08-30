import axiosClient from "./axiosClient";


const reviewApi = {

    getAllReview(productID){
        const url = `/api/feedback/get-by-product/${productID}`;
        return axiosClient.get(url)
    }
    // updateReview(productID){
    //     const url = `/product/${productID}`;
    //     return axiosClient.patch(url);
    // },
    // deleteAdminProduct(productID){
    //     const url = `/product/${productID}`;
    //     return axiosClient.delete(url);
    // },
    // addAdminProduct(params){
    //     const url = '/product';
    //     return axiosClient.post(url,{params});
    // }
};
export default reviewApi;