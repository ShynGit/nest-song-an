import adminAxios from "./adminAxios";

export const productApi = {
    getProductByPage: (offset, limit) => {
        return adminAxios.post(`Product`);
    },

    getProductById: (id) => {
        return adminAxios.get(`Product/${id}`);
    },
};
