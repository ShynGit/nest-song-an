import { useEffect, useState } from "react";
import AdminLayout from "../../components/layout/AdminLayout";
import { HorizontalProductDetail } from "../../components/Product/HorizontalProductDetail";
import { productApi } from "../../api/productApi";
import { Grid, Pagination } from "@mui/material";

export const DashBoard = () => {
  const [product, setProduct] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    productApi
      .getProductByPage(1, 8)
      .then((res) => setProduct(res))
      .catch((err) => {
        console.log(err);
      });

    return () => {};
  }, []);
  return (
    <AdminLayout>
      <Grid container spacing={3}>
        {/* <Grid item xs={12}>
          <Grid container>
            <Grid item xs={2}>
              Hình ảnh
            </Grid>
            <Grid item xs={7}>
              Tên và mô tả
            </Grid>
            <Grid
              item
              xs={1}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Giá Tiền
            </Grid>
            <Grid
              item
              xs={2}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Hành động
            </Grid>
          </Grid>
        </Grid> */}
        {product.map((item, index) => (
          <HorizontalProductDetail
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.listImages[0].imgPath}
            price={item.basePrice}
            deal={item.deal}
            desc={item.description}
            status={item.status}
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
        count={10}
        color="primary"
      />
    </AdminLayout>
  );
};
