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

export const Cart = ({ setStep }) => {
    const cart = useSelector(selectCart);
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    useEffect(() => {
        const fetchCart = async () => {
            try {
                dispatch(CART_LOADING_REQUEST());
                const response = await billApi.getCart(user.userInfor.id);
                localStorage.setItem("cart", response);
                dispatch(CART_LOADING_SUCCESS(response));
            } catch (error) {
                const errorMessage = getErrorMessageFromServer(error);
                dispatch(CART_LOADING_FAIL(errorMessage));
            }
        };
        fetchCart();
    }, []);

    return (
        <div className="flex justify-center">
            <div className="w-7/12">
                {cart.products.map((card, index) => (
                    <Link
                        to={`/production/${card.id}`}
                        onClick={() => window.scrollTo(0, 0)}
                    >
                        {console.log(card)}
                        <div
                            key={index}
                            className="flex m-4 mx-10 p-4 bg-white"
                            style={{
                                boxShadow: "rgba(0, 0, 0, 0.20) 0px 5px 15px",
                            }}
                        >
                            <div className="w-[30%]">
                                <img
                                    src={card.image}
                                    className="w-full rounded-xs"
                                />
                            </div>
                            <div className="w-8/12 ml-6 text-xs">
                                <div className="text-xl">{card.name}</div>
                                <div>{card.description}</div>
                                <div></div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            <div className="w-3/12 mt-5">
                <div className="p-5 bg-white shadow-lg shadow-gray-200 border-2">
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Consequuntur, neque. Non eius ex, quis expedita
                        ipsam sapiente voluptas error eaque adipisci atque iusto
                        magnam fugiat sunt? Soluta aliquam et ut!
                    </div>
                    <div className="border-t-2 my-6 w-11/12 m-auto border-gray-200" />
                    <div
                        className="m-3 p-3 text-center bg-[#00ADB5] text-white shadow-md cursor-pointer"
                        onClick={() => setStep("delivery")}
                    >
                        Thanh toán
                    </div>
                </div>
            </div>
        </div>
    );
};
