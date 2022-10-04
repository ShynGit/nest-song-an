import adminAxios from "./adminAxios";

export const accountApi = {
    getAllAccount: () => {
        console.log(adminAxios.get("/user"));
        return adminAxios.get("/user");
    },
};
