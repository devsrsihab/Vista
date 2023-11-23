import axios from "axios";
import { clearCookie } from "./Auth";


const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_API_URL ,
    withCredentials: true
})

// intercept reponse chekcer
axiosSecure.interceptors.response.use(
    // return the response if everyting if right
    response => response,
    // if error
    async err => {
    console.log('the erro traced by interceptor==>',err.response);
    // if the error status 401 || 403
    if (err.response &&
       (err.response.status === 401 || err.response.status === 403)) {
        //    clear cookie
        await clearCookie()
        window.location.replace('/login')
    }

    return Promise.reject(err)

})





export default axiosSecure