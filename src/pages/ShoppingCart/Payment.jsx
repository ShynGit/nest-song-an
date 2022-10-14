import { useSelector } from "react-redux";
import { selectCart } from "../../features/cart/cartSlice";

export const Payment = ({ setStep }) => {
    const cart = useSelector(selectCart);
    const handlePay = () => {};

    return (
        <div>
            <button
                className="bg-regal-blue rounded-3xl w-60 h-12 text-white shadow-md"
                onClick={() => handlePay()}
            >
                Thanh toán
            </button>
        </div>
    );
};
