import axios from 'axios'
import queryString from 'query-string'

 const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    
    headers: {
        'content-type': 'application/json',
    },
    paramsSerializer: (params) => queryString.stringify(params),
})

    axiosClient.interceptors.response.use((response) => {
        if(response && response.data) {
            return response.data;
        }
    })

export const axiosClient2 = axios.create({
        baseURL: process.env.REACT_APP_API_URL_2,
        
        headers: {
            'content-type': 'application/json',
        },
        paramsSerializer: (params) => queryString.stringify(params),
    })
    
axiosClient2.interceptors.response.use((response) => {
        if(response && response.data) {
            return response.data;
        }
    })
// axiosClient2.defaults.headers.common[ 'Authorization' ] =  'Bearer ' + localStorage.getItem('jwt');
export default axiosClient;

