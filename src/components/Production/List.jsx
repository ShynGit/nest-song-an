import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { productApi } from "../../api/productApi";
import { selectFilter } from "../../features/production/filterSlice";
import {
    PRODUCT_LOADING_FAIL,
    PRODUCT_LOADING_BY_PAGE_SUCCESS,
    PRODUCT_LOADING_REQUEST,
    selectProduct,
} from "../../features/production/productSlice";
import {
    convertPriceToString,
    getErrorMessageFromServer,
} from "../../utils/serverUtils";
import { Loading } from "../Loading/Loading";
import { Pagination } from "./Pagination";

export const List = ({ inProductPage, category }) => {
    const [page, setPage] = useState(1);
    const filter = useSelector(selectFilter);
    const products = useSelector(selectProduct);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                dispatch(PRODUCT_LOADING_REQUEST());
                const response = await productApi.getProductByFilter(filter);
                dispatch(PRODUCT_LOADING_BY_PAGE_SUCCESS(response));
                setPage(1);
            } catch (error) {
                const errorMessage = getErrorMessageFromServer(error);
                dispatch(PRODUCT_LOADING_FAIL(errorMessage));
            }
        };
        fetchProduct();
    }, [filter]);
    useEffect(() => {
        setPage(1);
    }, [category]);

    let productList = [...products.products];
    if (products.products.length !== 0 && category !== undefined)
        if (category.id !== 0)
            productList = [...products.products].filter(
                (product) => product.cateId === category.id
            );

    return (
        <>
            {products.loading ? (
                inProductPage && <Loading />
            ) : (
                <div className="flex flex-col justify-around">
                    {/* sản phẩm */}
                    <div className="grid-cols-3 grid gap-7">
                        {productList.length === 0 ? (
                            <div className="text-center font-semibold text-gray-600 col-span-3 p-10 text-2xl h-screen">
                                <FontAwesomeIcon icon={faMagnifyingGlass} />{" "}
                                Không tìm thấy sản phẩm nào
                            </div>
                        ) : (
                            productList.map(
                                (card, index) =>
                                    index < page * 9 &&
                                    index >= (page - 1) * 9 && (
                                        <div
                                            className="mb-6 shadow-md"
                                            key={index}
                                        >
                                            <Link
                                                to={`/production/${card.id}`}
                                                onClick={window.scrollTo(0, 0)}
                                            >
                                                <img
                                                    src={
                                                        card.listImages[0]
                                                            .imgPath
                                                    }
                                                    className="object-cover aspect-square rounded-md"
                                                />

                                                <div className="pt-4 pr-20 flex flex-col gap-1.5 text-sm m-4 mt-0">
                                                    <h1 className="uppercase font-bold font-verda">
                                                        {card.name}
                                                    </h1>
                                                    <div className="truncate text-xs text-gray-400/80">
                                                        {card.description}
                                                    </div>
                                                    <div className="text-orange-500 font-trebu">
                                                        <div className="font-semibold">
                                                            {convertPriceToString(
                                                                card.basePrice -
                                                                    card.basePrice *
                                                                        card.deal
                                                            )}{" "}
                                                            VNĐ
                                                        </div>
                                                        {card.deal === 0 || (
                                                            <div className="text-gray-400/60 text-sm font-thin line-through">
                                                                {convertPriceToString(
                                                                    card.basePrice
                                                                )}{" "}
                                                                VNĐ
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    )
                            )
                        )}
                    </div>
                    {inProductPage && (
                        <Pagination
                            page={page}
                            products={productList}
                            setPage={setPage}
                        />
                    )}
                </div>
            )}
        </>
    );
};
