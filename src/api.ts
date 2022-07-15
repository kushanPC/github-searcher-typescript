import axios, { AxiosInstance } from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.github.com',
  responseType: 'json',
}) as AxiosInstance; 

export default axiosInstance;
