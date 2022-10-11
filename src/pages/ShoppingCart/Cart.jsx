import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
    CART_LOADING_FAIL,
    CART_LOADING_REQUEST,
    CART_LOADING_SUCCESS,
    selectCart,
} from "../../features/cart/cartSlice";
import { selectUser } from "../../features/user/userSlice";
import { billApi } from "../../api/billApi";
import { getErrorMessageFromServer } from "../../utils/serverUtils";
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
                console.log(user);
                const response = await billApi.getCart(user.userInfor.id);
                console.log(response);
                localStorage.setItem("cart", response);
                dispatch(CART_LOADING_SUCCESS(response));
            } catch (error) {
                const errorMessage = getErrorMessageFromServer(error);
                dispatch(CART_LOADING_FAIL(errorMessage));
            }
        };
        fetchCart();
    }, [token]);

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
                {cart.products.length == 0 ? (
                    <div className="font-medium text-zinc-500 text-xl mt-10 text-center w-full">
                        Giỏ hàng trống
                    </div>
                ) : (
                    cart.products.map((card, index) => {
                        console.log(card);
                        totalPrice +=
                            card.basePrice - card.basePrice * card.deal;

                        return (
                            <div className="">
                                <div
                                    key={index}
                                    className="flex bg-white relative items-center my-7"
                                    // style={{
                                    //     boxShadow: "rgba(0, 0, 0, 0.20) 0px 5px 15px",
                                    // }}
                                >
                                    <Link
                                        to={`/production/${card.id}`}
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
                                                {card.name}
                                            </div>
                                            <div>{card.description}</div>
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
                            {totalPrice}{" "}
                            <span className="text-xs">&#8363;</span>
                        </span>
                    </div>
                    <div
                        className="my-10 px-10 py-2.5 text-center bg-[#00ADB5] text-white shadow-md cursor-pointer rounded-full"
                        onClick={() => setStep("delivery")}
                    >
                        Mua hàng
                    </div>
                </div>
            </div>
        </div>
    );
};
