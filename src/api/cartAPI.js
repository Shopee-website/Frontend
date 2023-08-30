import axiosClient from "./axiosClient";

const cartApi = {

    getCartByUserID(userID) {
        const url = `/cart/${userID}`;
        return axiosClient.get(url)
    },
    updateCartByUserID(userID){
        const url = `/cart/update-cart/${userID}`;
        return axiosClient.patch(url)
    },
    deleteCartByUserID(userID){
        const url = `/cart/delete-cart/${userID}`;
        return axiosClient.delete(url)
    }
};
export default cartApi;