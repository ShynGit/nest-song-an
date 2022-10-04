import { useState } from "react";
import { Link } from "react-router-dom";
import SlideshowWithPagination from "react-slideshow-with-pagination";
import Image1 from "../../assets/images/banner-1.jpg";
import Image2 from "../../assets/images/banner-2.jpg";

const product = {
    image: [Image1, Image2],
    title: "Yến tinh chế 50g",
    des: "Yến được tinh chế thơm ngon bổ dưỡng",
    price: "1.250.000",
    quantity: 20,
};

const CARDS_DETAILS = [
    { image: Image1, title: "Yến sào" },
    { image: Image2, title: "Yến sào" },
    { image: Image2, title: "Yến sào" },
    { image: Image2, title: "Yến sào" },
    { image: Image2, title: "Yến sào" },
    { image: Image2, title: "Yến sào" },
];

export const ProductDetail = () => {
    const [productAmount, setProductAmount] = useState(1);
    const [productImage, setProductImage] = useState(product.image[0]);

    return (
        <>
            <div className="bg-gray-100 absolute h-screen">
                <div className="flex bg-white p-10 m-20">
                    <div className="w-[60%] px-14">
                        <img
                            src={productImage}
                            alt={product.title}
                            className="w-full shadow-lg shadow-gray-400"
                        />
                        <div className="flex justify-center gap-2 mt-4">
                            {product.image.map((item) => {
                                return (
                                    <img
                                        src={item}
                                        className="w-28 cursor-pointer"
                                        onMouseOver={() =>
                                            setProductImage(item)
                                        }
                                    />
                                );
                            })}
                        </div>
                    </div>

                    <div className="w-[40%] flex flex-col justify-between">
                        <div>
                            <h1 className="text-3xl font-semibold font-verda">
                                {product.title}
                            </h1>
                            <p className="text-orange-500 font-trebu font-semibold text-lg mt-10">
                                Giá: {product.price} VNĐ
                            </p>
                            <div className="flex mt-3">
                                <p className="w-11/12 text-gray-500">
                                    {product.des} Lorem ipsum dolor sit amet
                                    consectetur adipisicing elit. Ipsam numquam
                                    fuga maxime magnam nulla. Perspiciatis
                                    nesciunt asperiores tenetur maxime
                                    blanditiis recusandae eveniet impedit harum
                                    repellendus repellat, cum ullam totam
                                    possimus!
                                </p>
                            </div>
                        </div>
                        <div className="mb-20">
                            <p className="text-green-400 mt-10 font-medium">
                                Sản phẩm còn lại: {product.quantity}
                            </p>
                            <div className="mt-2 mb-1 flex">
                                <div className="flex">
                                    <button
                                        className="px-4 border text-lg flex items-center rounded-tl-3xl rounded-bl-3xl"
                                        onClick={() => {
                                            if (productAmount > 1)
                                                return setProductAmount(
                                                    (pre) => pre - 1
                                                );
                                        }}
                                    >
                                        -
                                    </button>
                                    <input
                                        value={productAmount}
                                        type="number"
                                        className="w-12 text-center border"
                                        onChange={(e) => {
                                            const number = Number.parseInt(
                                                e.target.value
                                            );
                                            if (number > product.quantity)
                                                number = product.quantity;
                                            if (number < 1) number = 1;
                                            return setProductAmount(number);
                                        }}
                                        min="1"
                                        max={product.quantity}
                                        required
                                    />
                                    <button
                                        className="px-4 border text-lg flex items-center rounded-tr-3xl rounded-br-3xl"
                                        onClick={() => {
                                            if (
                                                productAmount < product.quantity
                                            )
                                                return setProductAmount(
                                                    (pre) => pre + 1
                                                );
                                        }}
                                    >
                                        +
                                    </button>
                                </div>
                                <button className="p-4 rounded-full bg-regal-blue text-white ml-8 text-xs uppercase font-medium">
                                    Thêm vào giỏ hàng
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
