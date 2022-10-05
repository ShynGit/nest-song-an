import adminAxios from "./adminAxios";

export const userApi = {
    login: (input) => {
        return adminAxios.post("User/login", input);
    },
};
