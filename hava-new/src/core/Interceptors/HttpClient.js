import axios from 'axios';
/**
 * Axios wrapper for axios
 */
class HttpClient {

    constructor() {
        this.axiosTokenRequest = false;
        this.baseURL = process.env.BASE_URL;
        this.timeout = 50000;
        this.refreshCall = false;
    }

    /**
     * http request using axios
     * @param method
     * @param url
     * @param data
     */
    static request = (method, url,  data) =>{

       this.axiosTokenRequest = axios.create({
            baseURL: this.baseURL,
            timeout: this.timeout,
            headers: {
                "Content-Type": "application/json",
                "Accept-Language": "en-US",
                Authorization: "Bearer " + this.getAuthToken(),
            }
        })

        this.axiosTokenRequest.interceptors.request.use(config => {
            return config;
        }, error => {
        //handle error request
        });

        function getRefreshToken() {

        }

        this.axiosTokenRequest.interceptors.response.use(
            function (response) {
                return response;
            },

            function (error) {

                let {config} = error;

                if (error.response.status === 401 && !this.refreshCall) {
                    this.refreshCall = true;
                    this.httpAuthRequest().post('/auth/v1/authenticate/refreshToken', {
                        refreshToken: getRefreshToken()
                    }).then(() => {
                        //handle the config
                        return this.axiosTokenRequest(config);
                    })
                        .catch(()=>{
                          //handle error
                        })
                }
            })

        this.refreshCall = false;
        return this.axiosTokenRequest;
    }

    /**
     * httpAuthRequest
     */
    httpAuthRequest = () =>{
        //create axios instance
       let httpAuth =  axios.create({
            baseURL:this.baseURL,
            timeout:this.timeout
        });
       //configure axios instance
        httpAuth.interceptors.request.use(
            (config) => {
                if (this.getAuthToken()) {
                    config.headers["Authorization"] = `Bearer ${this.getAuthToken()}`;
                }
                config.headers["x-api-key"] = process.env.VUE_APP_X_KEY;
                config.headers["x-api-secret"] = process.env.VUE_APP_X_SECRET;
                config.headers["Content-Type"] = "application/json";
                return config;
            },
            (error) => {
                return Promise.reject(error);
            }
        );
        return httpAuth;
    }

};

export default HttpClient;
