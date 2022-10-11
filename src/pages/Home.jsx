import React from "react";
import { Link } from "react-router-dom";
import { List } from "../components/Production/List";
import background from "../assets/images/background-image.jpg";
import { Sale } from "../components/Production/Sale";

export const Home = () => {
    return (
        <>
            <div>
                <div className="pb-10">
                    <div
                        className="pt-56 bg-fixed relative bg-cover h-[32rem] bg-no-repeat bg-center text-center text-white"
                        style={{
                            backgroundImage: `url(${background})`,
                        }}
                    >
                        <h1 className="font-cur text-6xl text-cyan-400">
                            Yến sào Song Ân
                        </h1>
                        <p className="font-sans">
                            Nỗ lực hết mình vì sứ mệnh đem đến sản phẩm Yến Sào
                            chất lượng nhất cho người Việt
                        </p>
                    </div>
                </div>
                <div>
                    <div className="md:mx-48 md:my-10 mx-4 my-4">
                        <div className="font-medium md:text-3xl text-md md:mb-8 mb-5">
                            Sản phẩm bán chạy
                        </div>
                    </div>
                    <div className="px-28">
                        <Sale />
                    </div>
                </div>
                <div className="md:mx-48 md:my-10 md:mb-4 mx-4 my-4">
                    <div className="font-medium md:text-3xl text-md md:mb-8 mb-5">
                        Yến sào
                    </div>
                    <List inProductPage={false} />
                </div>
                <Link to="/production" onClick={() => window.scrollTo(0, 0)}>
                    <div className="flex justify-center mb-10">
                        <button className="w-fit bg-[#00ADB5] text-white py-2 px-8 rounded-[3px] text-base">
                            Xem thêm
                        </button>
                    </div>
                </Link>
            </div>
        </>
    );
};
