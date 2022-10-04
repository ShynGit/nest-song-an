export const getTokenDataFromLocalStorage = () => {
    const tokenData = localStorage.getItem("tokenData")
        ? JSON.parse(localStorage.getItem("tokenData"))
        : null;
    return tokenData;
};
