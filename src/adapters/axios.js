import axios from 'axios'
const url = import.meta.env.VITE_URL


const axiosInstance = axios.create({
    baseURL: `${url}/api/`,
    
  });

export default axiosInstance;