import { useState } from "react";
import { useEffect } from "react";
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
                <div
                    className="spinner-grow inline-block w-20 h-20 bg-current rounded-full opacity-0 text-regal-blue absolute top-[50%] left-[50%] -ml-10 -mt-10"
                    role="status"
                >
                    <span className="visually-hidden">Loading...</span>
                </div>
            ) : (
                <div>
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
                                                <div className="text-orange-500 font-semibold font-trebu">
                                                    <div>
                                                        {card.basePrice -
                                                            card.basePrice *
                                                                card.deal}{" "}
                                                        VNĐ
                                                    </div>
                                                    {card.deal === 0 || (
                                                        <div className="text-gray-400 line-through">
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
