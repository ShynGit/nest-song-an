import adminAxios from "./adminAxios";

export const billApi = {
    getCart: (customerId) => {
        return adminAxios.get(`/bill/customer-id-status/${customerId}/1`);
    },
};
