import adminAxios from "./adminAxios";

export const productApi = {
    getAllProduct: () => {
        return adminAxios.get("/Product");
    },

    getProductByPage: (offset, limit) => {
        return adminAxios.get(`/Product/page?page=${offset}&products=${limit}`);
    },

    getProductById: (id) => {
        return adminAxios.get(`/Product/${id}`);
    },
};
