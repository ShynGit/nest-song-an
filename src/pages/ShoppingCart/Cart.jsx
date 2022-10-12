import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
    CART_LOADING_FAIL,
    CART_LOADING_REQUEST,
    CART_LOADING_SUCCESS,
    CART_TOTAL_UPDATE,
    selectCart,
} from "../../features/cart/cartSlice";
import { selectUser } from "../../features/user/userSlice";
import { billApi } from "../../api/billApi";
import {
    convertPriceToString,
    getErrorMessageFromServer,
} from "../../utils/serverUtils";
import image from "../../assets/images/banner-1.jpg";

export const Cart = ({ setStep }) => {
    const cart = useSelector(selectCart);
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    const token = localStorage.getItem("token");
    let totalPrice = 0;

    useEffect(() => {
        const fetchCart = async () => {
            try {
                dispatch(CART_LOADING_REQUEST());
                const response = await billApi.getCart(user.userInfor.id);
                localStorage.setItem("cart", response[0]);
                dispatch(CART_LOADING_SUCCESS(response[0]));
            } catch (error) {
                const errorMessage = getErrorMessageFromServer(error);
                dispatch(CART_LOADING_FAIL(errorMessage));
            }
        };
        fetchCart();
    }, [token]);

    console.log(cart);

    return (
        <div className="mt-10">
            <div className="w-9/12 m-auto">
                <ul className="grid grid-cols-12 grid-flow-row-dense text-center uppercase font-bold text-xs text-zinc-500 border-b-2 pb-1">
                    <li className="col-span-5 justify-self-start">Sản phẩm</li>
                    <li className="col-span-2">Loại</li>
                    <li className="col-span-2">Số lượng</li>
                    <li className="col-span-2">giá</li>
                    <li className="invisible col-span-1">delete</li>
                </ul>
                {cart.cart == null ? (
                    <div className="font-medium text-zinc-500 text-xl mt-10 text-center w-full">
                        Giỏ hàng trống
                    </div>
                ) : (
                    cart.cart.listBillDetails.map((item, index) => {
                        totalPrice += item.price;
                        // item.basePrice - item.basePrice * item.deal;

                        return (
                            <div className="" key={index}>
                                <div className="flex bg-white relative items-center my-7">
                                    <Link
                                        to={`/production/${item.id}`}
                                        onClick={() => window.scrollTo(0, 0)}
                                    >
                                        <div className="w-[30%]">
                                            <img
                                                src={image}
                                                className="w-full rounded-xs"
                                            />
                                        </div>
                                        <div className="w-8/12 ml-6 text-xs">
                                            <div className="text-xl">
                                                {item.name}
                                            </div>
                                            <div>{item.description}</div>
                                            <div></div>
                                        </div>
                                    </Link>
                                    <div className="text-zinc-500 h-fit px-3 py-1.5 absolute right-0 cursor-pointer">
                                        &#10006;
                                    </div>
                                </div>
                                <div className="border-t-2 w-full border-gray-200" />
                            </div>
                        );
                    })
                )}
            </div>

            <div className="w-9/12 m-auto">
                <div className="flex items-center justify-end">
                    <div className="font-verda text-[0.93rem] font-semibold mr-10 text-zinc-500">
                        Tổng:{" "}
                        <span className="font-semibold text-red-500">
                            {convertPriceToString(totalPrice)}{" "}
                            <span className="text-xs">&#8363;</span>
                        </span>
                    </div>
                    <div
                        className="my-10 px-10 py-2.5 text-center bg-[#00ADB5] text-white shadow-md cursor-pointer rounded-full"
                        onClick={() => {
                            dispatch(CART_TOTAL_UPDATE(totalPrice));
                            setStep("delivery");
                        }}
                    >
                        Mua hàng
                    </div>
                </div>
            </div>
        </div>
    );
};
