import axios from "axios";
import {createContext, useContext} from "react";

const axiosInstance = axios.create({
    baseURL: "http://localhost:3000/api/v1",
    timeout: 10_000,
    headers: {
        'Content-Type': 'application/json',
    }
});

axiosInstance.interceptors.request.use(
    config => {
        const token = localStorage.authToken;

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

export const AxiosContext = createContext(axiosInstance);

export const AxiosProvider = ({ children }) => {
    return (
        <AxiosContext.Provider value={axiosInstance}>
            {children}
        </AxiosContext.Provider>
    )
}

export default function AxiosConsumer() {
    return useContext(AxiosContext);
}