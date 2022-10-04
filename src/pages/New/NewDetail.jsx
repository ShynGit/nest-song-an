import { Link } from "react-router-dom";
import Image1 from "../../assets/images/banner-1.jpg";
import Image2 from "../../assets/images/banner-2.jpg";

const item = {
    image: Image1,
    title: "Yến tinh chế 50g",
    des: "Yến được tinh chế thơm ngon bổ dưỡng",
    price: 1250000,
    quantity: 20,
};

const CARDS_DETAILS = [
    { image: Image1, title: "Giá trị dinh dưỡng của yến sào" },
    { image: Image2, title: "Lợi ích của yến sào với sức khỏe" },
    { image: Image2, title: "Yến sào adfasdfd" },
    { image: Image2, title: "Yến sào adfasdfd" },
    { image: Image2, title: "Yến sào adfasdfd" },
    { image: Image2, title: "Yến sào adfasdfd" },
];

const slicedCard = CARDS_DETAILS.slice(0, 6);

export const NewDetail = () => {
    return (
        <>
            <div className="pt-52 bg-gray-100"></div>
            <div className="pt-10 px-64">
                <h1 className="text-3xl font-bold">{item.title}</h1>
                <div className="text-gray-400 font-serif ">
                    20:20 Ngày/Tháng/Năm
                </div>
                <div className="border-t-2 w-full border-gray-200 my-10" />
                <div className="flex">
                    <div className="w-8/12 indent-10 pr-8 pt-2">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Sint reiciendis incidunt quam unde saepe
                            repellat pariatur consequuntur qui atque excepturi
                            animi delectus, quae libero, ut doloribus.
                            Repellendus corporis molestiae aspernatur! Lorem
                            ipsum dolor sit amet consectetur adipisicing elit.
                            Alias error impedit nemo non! Velit consequatur,
                            unde repellat at nulla possimus iure cum error
                            tenetur dignissimos deleniti consectetur ea placeat
                            dolorum?
                        </p>
                        <p className="mt-7">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Laudantium nulla dolores, animi repudiandae
                            sunt ipsum temporibus possimus minus saepe culpa, ut
                            est totam, eaque fugiat consequuntur vero
                            perferendis aut officia. Ab sunt, porro repellendus
                            quo veniam corporis nemo aliquam reiciendis rem
                            omnis ad facilis consectetur ea esse maxime harum
                            officia quod cumque adipisci magni. Consequatur
                            obcaecati eos laboriosam nihil veritatis. Officia
                            voluptate facilis doloremque similique asperiores,
                            ratione vero maiores dolorem neque, aliquid ex
                            molestiae quis quos corrupti ab distinctio impedit
                            alias cupiditate maxime iste incidunt assumenda enim
                            veritatis repudiandae. Laborum. Eveniet accusantium
                            molestias quidem sint ipsa totam harum magni, et
                            pariatur rerum alias sapiente dolorem cum magnam
                            dolores dignissimos praesentium amet repellat vero
                            hic velit! Quibusdam eum minima pariatur distinctio?
                        </p>
                    </div>
                    <div className="w-4/12">
                        {slicedCard.map((card, index) => (
                            <div key={index} className="max-h-64 m-4">
                                <div className="flex">
                                    <Link
                                        to="/new/new-detail"
                                        className="rounded-sm w-5/12"
                                        onClick={() => window.scrollTo(0, 0)}
                                    >
                                        <img src={card.image} />
                                    </Link>
                                    <div className="text-xs w-7/12">
                                        <Link
                                            to="/new/new-detail"
                                            onClick={() =>
                                                window.scrollTo(0, 0)
                                            }
                                        >
                                            <h1
                                                className="text-truncate text-base p-2 font-semibold leading-6 uppercase"
                                                title={card.title}
                                            >
                                                {card.title}
                                            </h1>
                                        </Link>
                                        <p className="text-truncate h-auto px-2 text-gray-400/70">
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit. Harum,
                                            culpa! Temporibus amet vitae
                                            aliquid. Corporis repellendus,
                                            tempore accusantium veritatis
                                            consequuntur, quos hic minus eius
                                            vel eum earum suscipit iusto
                                            ducimus.
                                        </p>
                                        <div className="w-full text-right p-2 text-[#00ADB5]">
                                            <Link
                                                to="/new/new-detail"
                                                onClick={() =>
                                                    window.scrollTo(0, 0)
                                                }
                                            >
                                                Xem thêm &#187;
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};
