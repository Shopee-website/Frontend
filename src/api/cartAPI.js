import axiosClient from "./axiosClient";

const cartApi = {
    postCart(params) {
        const url = 'cart/add-to-cart';
        return axiosClient.post(url, params)
    },
    getCart : () => {
        const url = 'cart/user-cart';
        return axiosClient.get(url)
    },
    updateCart : (params) => {
        const url = 'cart/update-cart';
        return axiosClient.patch(url, params)
    },
    deleteCart : (cartid) => {
        const url = `cart/delete-cart-item/${cartid}`;
        return axiosClient.delete(url)
    }
};
export default cartApi;