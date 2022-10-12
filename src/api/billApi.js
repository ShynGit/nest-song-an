import adminAxios from "./adminAxios";

export const billApi = {
    getCart: (customerId) => {
        return adminAxios.get(
            `/bill/customer-id-status?customerId=${customerId}&Status=1`
        );
    },
};
