import { Link } from "react-router-dom";
import Image1 from "../assets/images/banner-1.jpg";
import Image2 from "../assets/images/banner-2.jpg";

const CARDS_DETAILS = [
    { image: Image1, title: "h" },
    { image: Image2, title: "a" },
    { image: Image2, title: "a" },
    { image: Image2, title: "a" },
    { image: Image2, title: "a" },
    { image: Image2, title: "a" },
];

export const ShoppingCart = () => {
    return (
        <>
            <div className="bg-gray-100 absolute w-full">
                <div className="bg-white shadow-lg shadow-gray-200">
                    <h1 className="font-normal pt-24 pl-44 pb-10 md:text-2xl text-md text-cyan-700">
                        Giỏ hàng
                    </h1>
                </div>
                <div className="flex justify-center">
                    <div className="w-7/12">
                        {CARDS_DETAILS.map((card) => (
                            <div
                                className="flex m-4 mx-10 p-4 bg-white"
                                style={{
                                    boxShadow:
                                        "rgba(0, 0, 0, 0.20) 0px 5px 15px",
                                }}
                            >
                                <div className="w-[30%]">
                                    <Link
                                        to="/production/product-detail"
                                        onClick={() => window.scrollTo(0, 0)}
                                    >
                                        <img
                                            src={card.image}
                                            className="w-full rounded-xs"
                                        />
                                    </Link>
                                </div>
                                <div className="w-8/12 ml-6 text-xs">
                                    <div className="text-xl">{card.title}</div>
                                    <div>
                                        Lorem ipsum dolor sit, amet consectetur
                                        adipisicing elit. Optio nobis debitis
                                        ut? Natus sint quos, delectus sequi
                                        optio nam nostrum. Cumque facilis omnis
                                        est atque? Laudantium vel enim iure
                                        temporibus?
                                    </div>
                                    <div></div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="w-3/12 mt-5">
                        <div className="p-5 bg-white shadow-lg shadow-gray-200 border-2">
                            <div>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Consequuntur, neque. Non eius
                                ex, quis expedita ipsam sapiente voluptas error
                                eaque adipisci atque iusto magnam fugiat sunt?
                                Soluta aliquam et ut!
                            </div>
                            <div className="border-t-2 my-6 w-11/12 m-auto border-gray-200" />
                            <div className="m-3 p-3 text-center bg-[#00ADB5] text-white shadow-md cursor-pointer">
                                Thanh toán
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
