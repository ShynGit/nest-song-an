import adminAxios from "./adminAxios";

export const billApi = {
    getCart: (customerId) => {
        return adminAxios.get(
            `/bill/customer-id-status?customerId=${customerId}&Status=1`
        );
    },
    payment: (cartId, data) => {
        return adminAxios.post("");
    },
    addToCart: (userId, productId, quantity) => {
        return adminAxios.post("/cart/add", {
            userId: userId,
            productId: productId,
            quantity: quantity,
        });
    },
};
