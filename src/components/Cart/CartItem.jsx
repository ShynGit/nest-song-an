import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { convertPriceToString } from "../../utils/serverUtils";

export const CartItem = ({ item, handleChangeAmount }) => {
    const [amount, setAmount] = useState(item.quantity);

    const cartTimeoutRef = useRef(null);

    useEffect(() => {
        if (cartTimeoutRef.current) clearTimeout(cartTimeoutRef.current);

        cartTimeoutRef.current = setTimeout(() => {
            handleChangeAmount(item.id, amount, item.billId);
        }, 500);
    }, [amount]);

    return (
        <div className=" bg-white relative items-center my-6">
            <ul className="grid grid-cols-12 grid-flow-row-dense text-center text-base font-normal text-zinc-500 items-center">
                <li className="col-span-5 grid grid-cols-12 justify-self-start items-center">
                    <div className="col-span-3">
                        <Link
                            to={`/production/${item.product.id}`}
                            onClick={window.scrollTo(0, 0)}
                        >
                            <img
                                src={item.product.listImages[0].imgPath}
                                className="aspect-square rounded-xs"
                            />
                        </Link>
                    </div>
                    <div className="col-span-9 ml-6">
                        <Link
                            to={`/production/${item.product.id}`}
                            onClick={window.scrollTo(0, 0)}
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
                    <button className="hover:text-red-500">
                        <FontAwesomeIcon icon={faMinus} />
                    </button>
                    <input
                        value={amount}
                        type="number"
                        className="w-8 text-center mx-2 font-bold"
                        onChange={(e) => {
                            const number = Number.parseInt(e.target.value);
                            console.log(number);
                            if (number > item.product.quantity)
                                number = item.product.quantity;
                            if (number < 1 || number == NaN) number = 1;
                            return setAmount(number);
                        }}
                        min="1"
                        max={item.product.quantity}
                        required
                    />
                    <button className="hover:text-green-500">
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                </li>
                <li className="col-span-2 font-trebu text-orange-500">
                    {convertPriceToString(item.price * item.quantity)}
                </li>
                <li className="text-zinc-500 h-fit px-3 py-1.5 col-span-1 right-0 cursor-pointer hover:text-zinc-300">
                    &#10006;
                </li>
            </ul>
        </div>
    );
};
