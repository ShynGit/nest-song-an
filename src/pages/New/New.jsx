import { Link } from "react-router-dom";
import Image1 from "../../assets/images/banner-1.jpg";
import Image2 from "../../assets/images/banner-2.jpg";

const CARDS_DETAILS = [
    { image: Image1, title: "Tin tức yến sào" },
    { image: Image2, title: "Tin tức yến sào" },
    { image: Image2, title: "Tin tức yến sào" },
    { image: Image2, title: "Tin tức yến sào" },
    { image: Image2, title: "Tin tức yến sào" },
    { image: Image2, title: "Tin tức yến sào" },
];

export const New = () => {
    return (
        <div className="pt-16">
            <div className="p-16 px-32">
                <h1 className="font-semibold md:text-3xl text-md md:mb-16 mb-5">
                    Tin tức
                </h1>
                <div>
                    {CARDS_DETAILS.map((card) => (
                        <div>
                            <div className="flex my-5 gap-4">
                                <Link
                                    to="new-detail"
                                    className="w-4/12 rounded-sm"
                                    onClick={() => window.scrollTo(0, 0)}
                                >
                                    <img src={card.image} />
                                </Link>
                                <div className="p-6 px-10">
                                    <h1 className="text-2xl font-bold leading-6 mb-5 uppercase">
                                        {card.title}
                                    </h1>
                                    <p className="text-gray-500/80">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Harum, culpa!
                                        Temporibus amet vitae aliquid. Corporis
                                        repellendus, tempore accusantium
                                        veritatis consequuntur, quos hic minus
                                        eius vel eum earum suscipit iusto
                                        ducimus.
                                    </p>
                                </div>
                            </div>
                            <div className="border-t-2 w-full border-gray-200" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
