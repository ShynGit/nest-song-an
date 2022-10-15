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
        console.log(filter);
        // const data = [
        //     { name: "PriceLow", properties: filter.lowPrice },
        //     { name: "PriceHigh", properties: filter.highPrice },
        // ];
        // if (filter.name[0]) data.push({ name: filter.name[0] });
        // if (filter.name[1]) data.push({ name: filter.name[1] });
        // console.log(JSON.stringify(data));
        return adminAxios.post("/product/filter", {
            ...filter,
            cateId: 0,
        });
    },
};
