import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://frontend-take-home-service.fetch.com',
    timeout: 5000,
    headers: { 'X-Requested-With': 'XMLHttpRequest' },
    withCredentials: true,
    responseType: 'json',
});

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
