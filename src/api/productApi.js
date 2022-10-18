import adminAxios from "./adminAxios";

export const productApi = {
    getAllProduct: () => {
        return adminAxios.get("/product");
    },

    getProductByPage: async (offset, limit) => {
        try{
            const res = await adminAxios.get(`/product/page?page=${offset}&limit=${limit}`);
            return res
        }
        catch(err){
            throw err
        }
    },

    getProductById: (id) => {
        return adminAxios.get(`/product/${id}`);
    },
    getCategory: () => {
        return adminAxios.get("/category");
    },
    getProductByFilter: (filter, cateId) => {
        return adminAxios.post("/product/filter", {
            ...filter,
            cateId: 0,
        });
    },
};


