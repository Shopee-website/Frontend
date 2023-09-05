import  axiosClient from "./axiosClient";


const adminReviewApi = {

    getAllReview(params){
        const url = 'api/admin/all-review';
        return axiosClient.get(url)
    }
   
};
export default adminReviewApi;