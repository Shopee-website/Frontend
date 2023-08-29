import {axiosClient2} from "./axiosClient";

const loginApi = {

    loginAPI(params){
        const url = 'auth/login';
        return axiosClient2.post(url, {params})
    }
};
export default loginApi;