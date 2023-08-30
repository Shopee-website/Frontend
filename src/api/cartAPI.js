import axiosClient from "./axiosClient";

const cartApi = {
    postCart(params) {
        const url = '/api/cart/add-to-cart';
        return axiosClient.post(url, params)
    },
    getCart : () => {
        const url = '/api/cart/user-cart';
        return axiosClient.get(url)
    },
    updateCart : (params) => {
        const url = '/api/cart/update-cart';
        return axiosClient.patch(url, params)
    },
    deleteCart : (cartid) => {
        const url = `/api/cart/delete-cart-item/${cartid}`;
        return axiosClient.delete(url)
    }
};
export default cartApi;