import { useState } from "react";
import { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { productApi } from "../../api/productApi";
import {
    PRODUCT_LOADING_FAIL,
    PRODUCT_LOADING_BY_PAGE_SUCCESS,
    PRODUCT_LOADING_REQUEST,
    selectProduct,
} from "../../features/production/productSlice";
import { getErrorMessageFromServer } from "../../utils/serverUtils";
import { Loading } from "../Loading/Loading";
import { Pagination } from "./Pagination";

export const List = ({ inProductPage }) => {
    const [page, setPage] = useState(1);
    const products = useSelector(selectProduct);
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

    return (
        <>
            {products.loading ? (
                inProductPage && <Loading />
            ) : (
                <div className="flex flex-col justify-around">
                    <div className="grid-cols-3 grid gap-7">
                        {products.products.map(
                            (card, index) =>
                                index < page * 9 &&
                                index >= (page - 1) * 9 && (
                                    <div className="mb-6" key={index}>
                                        <Link
                                            to={`/production/${card.id}`}
                                            onClick={window.scrollTo(0, 0)}
                                        >
                                            <img
                                                src={card.image}
                                                className="w-full rounded-sm"
                                            />

                                            <div className="pt-4 pr-28 flex flex-col gap-1.5  text-sm">
                                                <h1 className="uppercase font-bold font-verda">
                                                    {card.name}
                                                </h1>
                                                <div className="truncate text-xs text-gray-400/80">
                                                    {card.description}
                                                </div>
                                                <div className="text-orange-500 font-trebu">
                                                    <div className="font-semibold">
                                                        {card.basePrice -
                                                            card.basePrice *
                                                                card.deal}{" "}
                                                        VNĐ
                                                    </div>
                                                    {card.deal === 0 || (
                                                        <div className="text-gray-400/60 text-sm font-thin line-through">
                                                            {card.basePrice} VNĐ
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                )
                        )}
                    </div>
                    {inProductPage && (
                        <Pagination
                            page={page}
                            products={products}
                            setPage={setPage}
                        />
                    )}
                </div>
            )}
        </>
    );
};
