import { Link } from "react-router-dom";
import Image1 from "../../assets/images/banner-1.jpg";
import Image2 from "../../assets/images/banner-2.jpg";

const CARDS_DETAILS = [
    { image: Image1, title: "Yến sào tinh chế 50g", price: "1.250.500" },
    { image: Image2, title: "Yến sào tinh chế 50g", price: "1.250.500" },
    { image: Image2, title: "Yến sào tinh chế 50g", price: "1.250.500" },
    { image: Image2, title: "Yến sào tinh chế 50g", price: "1.250.500" },
    { image: Image2, title: "Yến sào tinh chế 50g", price: "1.250.500" },
    { image: Image2, title: "Yến sào tinh chế 50g", price: "1.250.500" },
    { image: Image2, title: "Yến sào tinh chế 50g", price: "1.250.500" },
    { image: Image2, title: "Yến sào tinh chế 50g", price: "1.250.500" },
    { image: Image2, title: "Yến sào tinh chế 50g", price: "1.250.500" },
];

export const List = () => {
    return (
        <div className="grid-cols-3 grid gap-7">
            {CARDS_DETAILS.map((card, index) => (
                <div className="mb-6" key={index}>
                    <Link
                        to="/production/product-detail"
                        onClick={() => window.scrollTo(0, 0)}
                    >
                        <img src={card.image} className="w-full rounded-sm" />
                    </Link>
                    <div className="pt-4 pr-28 flex flex-col gap-1.5  text-sm">
                        <h1 className="uppercase font-bold font-verda">
                            {card.title}
                        </h1>
                        <div className="truncate text-xs text-gray-400/80">
                            Short description Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Alias excepturi
                            corrupti consequuntur, atque iusto veritatis!
                        </div>
                        <div className="text-orange-500 font-semibold font-trebu">
                            {card.price} VNĐ
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
