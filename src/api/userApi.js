import adminAxios from "./adminAxios";

export const userApi = {
    login: (input) => {
        return adminAxios.post("user/login", input);
    },
    signUp: (input) => {
        return adminAxios.post("user/insert", input);
    },
    getAll: () => {
        return adminAxios.get("user");
    },
    getRoles: () => {
        return adminAxios.get("role");
    },
    getUserByPage: async (offset, limit) => {
        try {
            const res = await adminAxios.get(
                `/user/page?page=${offset}&limit=${limit}`
            );
            return res;
        } catch (err) {
            throw err;
        }
    },
    getCountAllUser: async () => {
        try {
            const res = await adminAxios.get(`/user/count/all`);
            return res;
        } catch (err) {
            throw err;
        }
    },
    getUserInfor: (id) => {
        const token = localStorage.getItem("token");
        const data = { id: id, token: token };
        return adminAxios.get(`user/${id}`, data);
    },
};
