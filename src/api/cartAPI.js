import axiosClient from "./axiosClient";

const cartApi = {
  getCartByUserID(userID) {
    const url = `/api/cart/${userID}`;
    return axiosClient.get(url);
  },
  updateCartByUserID(userID) {
    const url = `/api/cart/update-cart/${userID}`;
    return axiosClient.patch(url);
  },
  deleteCartByUserID(userID) {
    const url = `/api/cart/delete-cart/${userID}`;
    return axiosClient.delete(url);
  },
};
export default cartApi;
