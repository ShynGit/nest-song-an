import { useState } from "react";
import { Cart } from "./Cart";

export const ShoppingCart = () => {
    const [step, setStep] = useState("cart");
    // console.log(step);
    return (
        <>
            <div className="bg-gray-100 absolute w-full">
                <div className="bg-white shadow-lg shadow-gray-200 m-24">
                    <div className="py-10">
                        <div className="flex justify-between w-9/12 text-[10px] font-semibold font-verda uppercase border-2 rounded-full text-center text-black m-auto">
                            <div
                                className={`rounded-full w-full p-2 pt-2.5 ${
                                    step === "cart"
                                        ? "bg-zinc-600 text-white"
                                        : ""
                                }`}
                            >
                                Giỏ hàng
                            </div>
                            <div
                                className={`rounded-full w-full p-2 pt-2.5 ${
                                    step === "delivery"
                                        ? "bg-zinc-600 text-white"
                                        : ""
                                }`}
                            >
                                Thông tin
                            </div>
                            <div
                                className={`rounded-full w-full p-2 pt-2.5 ${
                                    step === "payment"
                                        ? "bg-zinc-600 text-white"
                                        : ""
                                }`}
                            >
                                Thanh toán
                            </div>
                            <div
                                className={`rounded-full w-full p-2 pt-2.5 ${
                                    step === "receipt"
                                        ? "bg-zinc-600 text-white"
                                        : ""
                                }`}
                            >
                                Biên nhận
                            </div>
                        </div>
                    </div>
                    {step === "cart" && (
                        <Cart setStep={(step) => setStep(step)} />
                    )}
                </div>
            </div>
        </>
    );
};
