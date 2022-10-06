export const getErrorMessageFromServer = (error) => {
    const errorMessage = error.response
        ? error.response.status
        : "Oops, something went wrong. Try later!";
    return errorMessage;
};

export const getTokenDataFromLocalStorage = () => {
    const tokenData = localStorage.getItem("token")
        ? JSON.parse(localStorage.getItem("token"))
        : null;
    return tokenData;
};

export const convertTokenToObject = () => {
    if (!localStorage.getItem("token")) return null;
    const token = JSON.parse(localStorage.getItem("token"));
    const tokenArray = token.split("|");
    let object = {};
    tokenArray.map((item) => {
        const itemSplit = item.split("=");
        object = { ...object, [itemSplit[0]]: itemSplit[1] };
    });
    return object;
};
