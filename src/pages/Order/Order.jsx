import { Table } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { billApi } from "../../api/billApi";
import {
    ORDER_LOADING,
    ORDER_LOADING_FAIL,
    ORDER_LOADING_SUCCESS,
    selectOrder,
} from "../../features/order/orderSlice";
import { selectUser } from "../../features/user/userSlice";
import { getErrorMessageFromServer } from "../../utils/serverUtils";
import { OrderCard } from "./OrderCard";

export const Order = () => {
    const user = useSelector(selectUser);
    const order = useSelector(selectOrder);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const FetchOrder = async () => {
            try {
                dispatch(ORDER_LOADING());
                const response = await billApi.getOrder(user.userInfor.id);
                console.log(response);
                dispatch(ORDER_LOADING_SUCCESS(response));
            } catch (error) {
                const errorMessage = getErrorMessageFromServer(error);
                dispatch(ORDER_LOADING_FAIL(errorMessage));
            }
        };
        if (user.token) FetchOrder();
        else navigate("/sign-in");
    }, [user]);

    return (
        <div className="p-20">
            <OrderCard card={order.data[0].listBillDetails} />
        </div>
    );
};
