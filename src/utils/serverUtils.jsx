export const getErrorMessageFromServer = (error) => {
    const errorMessage = error.response
        ? error.response.status
        : "Oops, something went wrong. Try later!";
    return errorMessage;
};

export const getTokenDataFromLocalStorage = () => {
    const tokenData = localStorage.getItem("tokenData")
        ? JSON.parse(localStorage.getItem("tokenData"))
        : null;
    return tokenData;
};
