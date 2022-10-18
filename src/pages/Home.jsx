import React from "react";
import { Link } from "react-router-dom";
import { List } from "../components/Production/List";
import background from "../assets/images/background-image.jpg";
import { Sale } from "../components/Production/Sale";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faFire } from "@fortawesome/free-solid-svg-icons";

export const Home = () => {
    return (
        <>
            <div>
                <div className="pb-10">
                    <div
                        className="pt-44 bg-fixed relative bg-cover h-[32rem] bg-no-repeat bg-center text-right text-white"
                        style={{
                            backgroundImage: `url(${background})`,
                        }}
                    >
                        <h1 className="mr-56 font-cur text-7xl text-[#295F2D]">
                            Yến sào Song Ân
                        </h1>
                        <p className="mr-56 font-sans pl-[49rem] text-[#295F2D]/50">
                            Nỗ lực hết mình vì sứ mệnh đem đến sản phẩm Yến Sào
                            chất lượng nhất cho người Việt #282934
                        </p>
                    </div>
                </div>
                <div>
                    <div className="md:mx-48 md:my-10 mx-4 my-4">
                        <div className="font-medium md:text-3xl text-md md:mb-8 mb-5">
                            <FontAwesomeIcon icon={faFire} />
                            <span className="ml-4">Sản phẩm bán chạy</span>
                        </div>
                    </div>
                    <div className="px-48">
                        <Sale />
                    </div>
                </div>
                <div className="md:mx-48 md:my-20 md:mt-28 md:mb-4 mx-4 my-4">
                    <div className="font-medium md:text-3xl text-md md:mb-8 mb-5">
                        <FontAwesomeIcon icon={faBagShopping} />
                        <span className="ml-4">Yến sào</span>
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
