import {axiosClient2} from "./axiosClient";

const cartApi = {

    getCartByUserID(userID) {
        const url = `/cart/${userID}`;
        return axiosClient2.get(url)
    },
    updateCartByUserID(userID){
        const url = `/cart/update-cart/${userID}`;
        return axiosClient2.patch(url)
    },
    deleteCartByUserID(userID){
        const url = `/cart/delete-cart/${userID}`;
        return axiosClient2.delete(url)
    }
};
export default cartApi;