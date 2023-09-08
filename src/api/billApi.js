import axiosClient from "./axiosClient";

const billAPI = {
    postBill : (params) => {
        const url = '/api/bill'
        return axiosClient.post(url, params)
    },
    getBill : () => {
        const url = '/api/bill/all_bill'
        return axiosClient.get(url)
    },
    getAllBill : () => {
        const url = '/api/bill/all_bill_admin'
        return axiosClient.get(url)
    },
    UpdateBillById : (id, credentials) => {
        const url = `/api/bill/${id}`
        return axiosClient.patch(url, credentials)
    }

}

export default billAPI

