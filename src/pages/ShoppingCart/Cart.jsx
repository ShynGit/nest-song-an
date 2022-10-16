import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

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
                        totalPrice += item.price * item.quantity;
                        // item.basePrice - item.basePrice * item.deal;

                        return (
                            <div className="" key={index}>
                                <div className=" bg-white relative items-center my-6">
                                    <ul className="grid grid-cols-12 grid-flow-row-dense text-center text-base font-normal text-zinc-500 items-center">
                                        <li className="col-span-5 grid grid-cols-12 justify-self-start items-center">
                                            <div className="col-span-3">
                                                <Link
                                                    to={`/production/${item.product.id}`}
                                                    onClick={window.scrollTo(
                                                        0,
                                                        0
                                                    )}
                                                >
                                                    <img
                                                        src={
                                                            item.product
                                                                .listImages[0]
                                                                .imgPath
                                                        }
                                                        className="aspect-square rounded-xs"
                                                    />
                                                </Link>
                                            </div>
                                            <div className="col-span-9 ml-6">
                                                <Link
                                                    to={`/production/${item.product.id}`}
                                                    onClick={window.scrollTo(
                                                        0,
                                                        0
                                                    )}
                                                >
                                                    <div className="text-base uppercase font-bold text-left">
                                                        {item.product.name}
                                                    </div>
                                                </Link>
                                                <div className="truncate text-xs">
                                                    {item.product.description}
                                                </div>
                                            </div>
                                        </li>
                                        <li className="col-span-2">Loại</li>
                                        <li className="col-span-2 font-trebu">
                                            <button className="hover:text-zinc-300">
                                                <FontAwesomeIcon
                                                    icon={faMinus}
                                                />
                                            </button>
                                            <input
                                                value={item.quantity}
                                                className="w-8 text-center mx-2"
                                            />
                                            <button className="hover:text-zinc-300">
                                                <FontAwesomeIcon
                                                    icon={faPlus}
                                                />
                                            </button>
                                        </li>
                                        <li className="col-span-2 font-trebu text-orange-500">
                                            {convertPriceToString(
                                                item.price * item.quantity
                                            )}
                                        </li>
                                        <li className="text-zinc-500 h-fit px-3 py-1.5 col-span-1 right-0 cursor-pointer hover:text-zinc-300">
                                            &#10006;
                                        </li>
                                    </ul>
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
