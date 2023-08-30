import axiosClient from "./axiosClient";

const billAPI = {
    postBill : (params) => {
        const url = '/api/bill'
        return axiosClient.post(url, params)
    },
    getBill : () => {
        const url = '/api/bill/all_bill'
        return axiosClient.get(url)
    }
}

export default billAPI

