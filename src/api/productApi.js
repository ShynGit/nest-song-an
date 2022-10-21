import adminAxios from "./adminAxios";

export const productApi = {
    getAllProduct: () => {
        return adminAxios.get("/product");
    },

    getProductByPage: async (offset, limit) => {
        try {
            const res = await adminAxios.get(
                `/product/page?page=${offset}&limit=${limit}`
            );
            return res;
        } catch (err) {
            throw err;
        }
    },

    getProductById: (id) => {
        return adminAxios.get(`/product/${id}`);
    },
    getCategory: () => {
        return adminAxios.get("/category");
    },
    getProductByFilter: (filter, cateId) => {
        const data = { ...filter, cateId: 0 };
        return adminAxios.post("/product/filter", data);
    },

    // Update product 
    updateProductById: async(proiId, proName, proDesc, proPrice ) => {
     
        try{
            const data = { name:proName, description:proDesc, basePrice:proPrice}
            console.log(data);
            const res = await adminAxios.put(`/product/${proiId}`, data)
            return res
        }catch(err){
            throw err
        }
    },
    //-------------------------
    // Update delete product

    deleteProductById: async(proiId) => {
        try{                  
            const res = await adminAxios.delete(`/product/${proiId}`)
            return res
        }catch(err){
            throw err
        }
    }

    //-------------------------
};
