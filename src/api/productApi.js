import adminAxios from "./adminAxios";

export const productApi = {
    getAllProduct: () => {
        return adminAxios.get("/product");
    },

    getProductByPage: (offset, limit) => {
        return adminAxios.get(`/product/page?page=${offset}&products=${limit}`);
    },

    getProductById: (id) => {
        return adminAxios.get(`/product/${id}`);
    },
    getCategory: () => {
        return adminAxios.get("/category");
    },
    getProductByFilter: (filter, cateId) => {
        const data = { ...filter, cateId: 0 };
        console.log(data);
        return adminAxios.post("/product/filter", data);
    },
};
