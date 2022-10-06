import adminAxios from "./adminAxios";

export const userApi = {
    login: (input) => {
        return adminAxios.post("User/login", input);
    },
    getUserInfor: (id) => {
        const token = localStorage.getItem("token");
        const data = { id: id, token: token };
        return adminAxios.get(`User/${id}`, data);
    },
};
