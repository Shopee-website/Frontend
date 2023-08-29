import {axiosClient2} from "./axiosClient";

const registerApi = {

    registerAPI(params){
        const url = 'auth/register';
        return axiosClient2.post(url, {params})
    }
};
export default registerApi;