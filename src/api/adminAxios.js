import axios from "axios";

const adminAxios = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json; charset=utf-8",
        token: "expired=2023/10/0600:00:00-id=1-fullname=admin-role=admin",
    },
});

adminAxios.interceptors.response.use(
    (response) => {
        if (response && response.data) {
            return response.data;
        }
        return response;
    },
    (error) => {
        throw error;
    }
);

export default adminAxios;
