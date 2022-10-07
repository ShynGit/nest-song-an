import { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SlideshowWithPagination from "react-slideshow-with-pagination";
import { productApi } from "../../api/productApi";
import {
    PRODUCT_LOADING_BY_PAGE_SUCCESS,
    PRODUCT_LOADING_FAIL,
    PRODUCT_LOADING_REQUEST,
    selectProduct,
} from "../../features/production/productSlice";
import { getErrorMessageFromServer } from "../../utils/serverUtils";
import { Loading } from "../Loading/Loading";

export const Sale = () => {
    const products = [...useSelector(selectProduct).products];
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                dispatch(PRODUCT_LOADING_REQUEST());
                const response = await productApi.getAllProduct();
                localStorage.setItem("products", response);
                dispatch(PRODUCT_LOADING_BY_PAGE_SUCCESS(response));
            } catch (error) {
                const errorMessage = getErrorMessageFromServer(error);
                dispatch(PRODUCT_LOADING_FAIL(errorMessage));
            }
        };
        fetchProduct();
    }, []);

    let saleProduct = [];
    if (products.length !== 0)
        saleProduct = products.sort((a, b) => b.deal - a.deal).slice(0, 6);

    return (
        <>
            {products.loading ? (
                <Loading />
            ) : (
                <SlideshowWithPagination
                    showNumbers={true}
                    showDots={true}
                    showArrows={true}
                >
                    {saleProduct.map((item, index, array) => (
                        <div
                            key={index}
                            className="flex justify-between px-20 text-sm"
                        >
                            <Link to={`/production/${item.id}`}>
                                <div className="uppercase font-bold font-verda">
                                    {item.name}
                                </div>
                                <div className="text-red-500 font-trebu">
                                    <div className="font-semibold">
                                        {item.basePrice -
                                            item.basePrice * item.deal}{" "}
                                        VNĐ
                                    </div>
                                    {item.deal === 0 || (
                                        <div className="text-gray-400/60 text-sm font-thin line-through">
                                            {item.basePrice} VNĐ
                                        </div>
                                    )}
                                </div>
                            </Link>
                            <Link
                                to={`/production/${
                                    array[(index + 1) % array.length].id
                                }`}
                            >
                                <div className="uppercase font-bold font-verda">
                                    {array[(index + 1) % array.length].name}
                                </div>
                                <div className="text-red-500 font-trebu">
                                    <div className="font-semibold">
                                        {array[(index + 1) % array.length]
                                            .basePrice -
                                            array[(index + 1) % array.length]
                                                .basePrice *
                                                array[
                                                    (index + 1) % array.length
                                                ].deal}{" "}
                                        VNĐ
                                    </div>
                                    {array[(index + 1) % array.length].deal ===
                                        0 || (
                                        <div className="text-gray-400/60 text-sm font-thin line-through">
                                            {
                                                array[
                                                    (index + 1) % array.length
                                                ].basePrice
                                            }{" "}
                                            VNĐ
                                        </div>
                                    )}
                                </div>
                            </Link>
                            <Link
                                to={`/production/${
                                    array[(index + 2) % array.length].id
                                }`}
                            >
                                <div className="uppercase font-bold font-verda">
                                    {array[(index + 2) % array.length].name}
                                </div>
                                <div className="text-red-500 font-trebu">
                                    <div className="font-semibold">
                                        {array[(index + 2) % array.length]
                                            .basePrice -
                                            array[(index + 2) % array.length]
                                                .basePrice *
                                                array[
                                                    (index + 2) % array.length
                                                ].deal}{" "}
                                        VNĐ
                                    </div>
                                    {array[(index + 2) % array.length].deal ===
                                        0 || (
                                        <div className="text-gray-400/60 text-sm font-thin line-through">
                                            {
                                                array[
                                                    (index + 2) % array.length
                                                ].basePrice
                                            }{" "}
                                            VNĐ
                                        </div>
                                    )}
                                </div>
                            </Link>
                        </div>
                    ))}
                </SlideshowWithPagination>
            )}
        </>
    );
};
