import { Grid, Pagination } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import { productApi } from "../../api/productApi";
import { HorizontalProductDetail } from "../../components/Product/HorizontalProductDetail";

export const ProductDashboard = ({
    isRerender,
    setIsRerender,
    successToastStatus,
    setSuccessToastStatus,
}) => {
    const [pageCount, setPageCount] = useState(1);
    const [product, setProduct] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        productApi
            .getCountAllProduct()
            .then((res) => setPageCount(res))
            .catch((err) => {
                console.log(err);
            });

        return () => {};
    }, []);

    useEffect(() => {
        productApi
            .getAllProductByPage(currentPage, 8)
            .then((res) => setProduct(res))
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setIsRerender(false);
            });
    }, [currentPage, isRerender]);

    // console.log(product);
    const handleChangePage = (e, page) => {
        setCurrentPage(page);
    };

    return (
        <div>
            <h1 className="text-3xl pt-4 pb-6 font-semibold  ">
                Quản lí sản phẩm
            </h1>
            <Grid container spacing={3}>
                {product.map((item) => (
                    <HorizontalProductDetail
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        image={item.listImages[0]?.imgPath}
                        price={item.basePrice}
                        deal={item.deal}
                        desc={item.description}
                        status={item.status}
                        rerender={isRerender}
                        setRerender={setIsRerender}
                        successToastStatus={successToastStatus}
                        setSuccessToastStatus={setSuccessToastStatus}
                    />
                ))}
            </Grid>
            <Pagination
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingTop: "40px",
                    backgroundColor: "#d9eeef",
                }}
                count={Math.ceil(pageCount / 8)}
                color="primary"
                onChange={handleChangePage}
            />
        </div>
    );
};
