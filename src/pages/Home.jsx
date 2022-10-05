import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Banner } from "../components/Banner/Banner";
import { List } from "../components/Production/List";
import SlideshowWithPagination from "react-slideshow-with-pagination";
import Image1 from "../assets/images/banner-1.jpg";
import Image2 from "../assets/images/banner-2.jpg";
import { useSelector } from "react-redux";
import { selectUser } from "../features/user/userSlice";

const CARDS_DETAILS = [
    { image: Image1, title: "" },
    { image: Image2, title: "" },
    { image: Image2, title: "" },
    { image: Image2, title: "" },
    { image: Image2, title: "" },
    { image: Image2, title: "" },
];

export const Home = () => {
    const user = useSelector(selectUser);
    // useEffect(() => {

    // }, []);

    return (
        <>
            {user.loading ? (
                <div
                    class="spinner-grow inline-block w-20 h-20 bg-current rounded-full opacity-0 text-regal-blue absolute top-[50%] left-[50%] -ml-10 -mt-10"
                    role="status"
                >
                    <span class="visually-hidden">Loading...</span>
                </div>
            ) : (
                <div>
                    <div className="pb-10">
                        {/* <div
                            className="pt-56 bg-fixed relative bg-auto h-[32rem] bg-no-repeat bg-center text-center text-white"
                            style={{
                                backgroundImage: `url(https://cf.shopee.vn/file/911dc69ba06a7473d350e98c928b1716)`,
                            }}
                        >
                            <h1 className="font-cur text-6xl text-cyan-400">
                                Yến sào Song Ân
                            </h1>
                            <p className="font-sans">
                                Nỗ lực hết mình vì sứ mệnh đem đến sản phẩm Yến
                                Sào chất lượng nhất cho người Việt
                            </p>
                        </div> */}
                        <Banner />
                    </div>
                    <div>
                        <div className="md:mx-48 md:my-10 mx-4 my-4">
                            <div className="font-medium md:text-3xl text-md md:mb-8 mb-5">
                                Sản phẩm bán chạy
                            </div>
                        </div>
                        <div className="px-28">
                            <SlideshowWithPagination
                                options={CARDS_DETAILS}
                                showDots={true}
                                showArrows={true}
                                numberOfCardsPerScreen={3}
                                showOneCardForWidthLower="sm"
                                slideshowContainerMaxWidth={false}
                                autoplay={true}
                                cardMarginX="0.6rem"
                                cardWidth={370}
                                cardsContainerJustify="center"
                                cardHeight={300}
                            />
                        </div>
                    </div>
                    <div className="md:mx-48 md:my-10 mx-4 my-4">
                        <div className="font-medium md:text-3xl text-md md:mb-8 mb-5">
                            Yến sào
                        </div>
                        <List />
                    </div>
                    <Link
                        to="/production"
                        onClick={() => window.scrollTo(0, 0)}
                    >
                        <div className="flex justify-center mb-10">
                            <button className="w-fit bg-[#00ADB5] text-white py-2 px-8 rounded-[3px] text-base">
                                Xem thêm
                            </button>
                        </div>
                    </Link>
                </div>
            )}
        </>
    );
};
