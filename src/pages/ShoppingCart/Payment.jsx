import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { billApi } from "../../api/billApi";
import { Loading } from "../../components/Loading/Loading";
import {
    CART_LOADING_REQUEST,
    CART_PAYING_SUCCESS,
    selectCart,
} from "../../features/cart/cartSlice";
import { convertPriceToString } from "../../utils/serverUtils";

export const Payment = ({ setStep }) => {
    const [alert, setAlert] = useState(false);
    const navigate = useNavigate();
    const cart = useSelector(selectCart);
    const dispatch = useDispatch();
    const handlePay = () => {
        const pay = async () => {
            dispatch(CART_LOADING_REQUEST());
            const response = await billApi.payment(cart.shipInfor);
            dispatch(CART_PAYING_SUCCESS());
            setStep("receipt");
            console.log(response);
        };
        if (cart.cart.listBillDetails.length !== 0) pay();
        else setAlert(true);
    };

    return (
        <>
            {alert && (
                <Dialog open={alert} onClose={() => setAlert(false)}>
                    <DialogTitle id="alert-dialog-title">
                        {"GIỎ HÀNG TRỐNG"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Không thể thanh toán khi giỏ hàng trống. Xin thử
                            lại!
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button
                            onClick={() =>
                                setAlert(false, navigate("/production"))
                            }
                            autoFocus
                        >
                            Sản phẩm
                        </Button>
                        <Button onClick={() => setAlert(false)}>Đóng</Button>
                    </DialogActions>
                </Dialog>
            )}
            {cart.loading ? (
                <Loading />
            ) : (
                <div className="mt-10 w-9/12 m-auto">
                    <div className="text-center text-4xl font-semibold">
                        Thanh toán
                    </div>
                    <div className="text-center py-10 text-lg">
                        <div>
                            <FontAwesomeIcon icon={faLocationDot} /> Địa chỉ
                            nhận hàng: {cart.shipInfor.address}
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faPhone} /> Số điện thoại
                            người nhận: {cart.shipInfor.phoneNumber}
                        </div>
                    </div>
                    <div className="mr-0 ml-auto w-fit text-xl font-semibold">
                        <span className=" ">Tổng tiền:</span>{" "}
                        <span className="text-orange-500">
                            {convertPriceToString(cart.totalPrice)} &#8363;
                        </span>
                    </div>
                    <div className="border-2 flex gap-2 mt-2 mb-4 p-2 w-fit mr-0 ml-auto">
                        <p className="px-5 font-semibold">
                            Phương thức thanh toán
                        </p>
                        <button className="px-5 border-l-2 text-emerald-500">
                            Tiền mặt
                        </button>
                    </div>
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
            )}
        </>
    );
};
