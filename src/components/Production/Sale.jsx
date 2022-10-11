import { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { productApi } from "../../api/productApi";
import {
    PRODUCT_LOADING_BY_PAGE_SUCCESS,
    PRODUCT_LOADING_FAIL,
    PRODUCT_LOADING_REQUEST,
    selectProduct,
} from "../../features/production/productSlice";
import {
    convertPriceToString,
    getErrorMessageFromServer,
} from "../../utils/serverUtils";
import { Carousel } from "../Carousel/Carousel";
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

    const salePrice = (item) => item.basePrice - item.basePrice * item.deal;

    return (
        <>
            {products.loading ? (
                <Loading />
            ) : (
                <Carousel data={saleProduct} />
                // <SlideshowWithPagination
                //     showNumbers={true}
                //     showDots={true}
                //     showArrows={true}
                // >
                //     {/* {saleProduct.map((item, index, array) => (
                //         <div
                //             key={index}
                //             className="flex justify-between px-20 text-sm"
                //         >
                //             <Link to={`/production/${item.id}`}>
                //                 <img
                //                     src={item.listImages[0].imgPath}
                //                     alt={item.name}
                //                     className="object-cover h-96 w-auto"
                //                 />
                //                 <div className="uppercase font-bold font-verda">
                //                     {item.name}
                //                 </div>
                //                 <div className="text-red-500 font-trebu">
                //                     <div className="font-semibold">
                //                         {convertPriceToString(salePrice(item))}{" "}
                //                         VNĐ
                //                     </div>
                //                     {item.deal === 0 || (
                //                         <div className="text-gray-400/60 text-sm font-thin line-through">
                //                             {convertPriceToString(
                //                                 item.basePrice
                //                             )}{" "}
                //                             VNĐ
                //                         </div>
                //                     )}
                //                 </div>
                //             </Link>
                //             <Link
                //                 to={`/production/${
                //                     array[(index + 1) % array.length].id
                //                 }`}
                //             >
                //                 <img
                //                     src={
                //                         array[(index + 1) % array.length]
                //                             .listImages[0].imgPath
                //                     }
                //                     alt={array[(index + 1) % array.length].name}
                //                 />
                //                 <div className="uppercase font-bold font-verda">
                //                     {array[(index + 1) % array.length].name}
                //                 </div>
                //                 <div className="text-red-500 font-trebu">
                //                     <div className="font-semibold">
                //                         {convertPriceToString(
                //                             salePrice(
                //                                 array[
                //                                     (index + 1) % array.length
                //                                 ]
                //                             )
                //                         )}{" "}
                //                         VNĐ
                //                     </div>
                //                     {array[(index + 1) % array.length].deal ===
                //                         0 || (
                //                         <div className="text-gray-400/60 text-sm font-thin line-through">
                //                             {convertPriceToString(
                //                                 array[
                //                                     (index + 1) % array.length
                //                                 ].basePrice
                //                             )}{" "}
                //                             VNĐ
                //                         </div>
                //                     )}
                //                 </div>
                //             </Link>
                //             <Link
                //                 to={`/production/${
                //                     array[(index + 2) % array.length].id
                //                 }`}
                //             >
                //                 <img
                //                     src={
                //                         array[(index + 2) % array.length]
                //                             .listImages[0].imgPath
                //                     }
                //                     alt={array[(index + 2) % array.length].name}
                //                 />
                //                 <div className="uppercase font-bold font-verda">
                //                     {array[(index + 2) % array.length].name}
                //                 </div>
                //                 <div className="text-red-500 font-trebu">
                //                     <div className="font-semibold">
                //                         {convertPriceToString(
                //                             salePrice(
                //                                 array[
                //                                     (index + 2) % array.length
                //                                 ]
                //                             )
                //                         )}{" "}
                //                         VNĐ
                //                     </div>
                //                     {array[(index + 2) % array.length].deal ===
                //                         0 || (
                //                         <div className="text-gray-400/60 text-sm font-thin line-through">
                //                             {convertPriceToString(
                //                                 array[
                //                                     (index + 2) % array.length
                //                                 ].basePrice
                //                             )}{" "}
                //                             VNĐ
                //                         </div>
                //                     )}
                //                 </div>
                //             </Link>
                //         </div>
                //     ))} */}
                // </SlideshowWithPagination>
            )}
        </>
    );
};
