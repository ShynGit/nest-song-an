import { useDispatch, useSelector } from "react-redux";
import { billApi } from "../../api/billApi";
import {
    CART_LOADING_REQUEST,
    selectCart,
} from "../../features/cart/cartSlice";

export const Payment = ({ setStep }) => {
    const cart = useSelector(selectCart);
    const dispatch = useDispatch();
    const handlePay = () => {
        const pay = async () => {
            // dispatch(CART_LOADING_REQUEST());
            const response = await billApi.payment(cart.shipInfor);
            console.log(response);
        };
        pay();
    };

    return (
        <div className="mt-10 w-9/12 m-auto">
            <div>Địa chỉ nhận hàng</div>
            <div>{cart.shipInfor.address}</div>
            <div>Số điện thoại người nhận {}</div>
            <div className="flex justify-between pb-16">
                <div
                    className="border-slate-300 border-2 rounded-3xl w-60 h-12 text-regal-blue cursor-pointer flex justify-center items-center"
                    onClick={() => setStep("delivery")}
                >
                    Quay lại
                </div>
                <button
                    className="bg-regal-blue rounded-3xl w-60 h-12 text-white shadow-md"
                    onClick={() => handlePay()}
                >
                    Thanh toán
                </button>
            </div>
        </div>
    );
};
