import { useEffect, useState } from "react";
import AdminLayout from "../../components/layout/AdminLayout";
import { ToastSuccess } from "../../components/Toast";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/user/userSlice";
import { useNavigate } from "react-router-dom";
import { UserDashboard } from "./UserDashboard";
import { ProductDashboard } from "./ProductDashboard";

export const DashBoard = () => {
    const user = useSelector(selectUser);
    const navigate = useNavigate();
    const [isRerender, setIsRerender] = useState(false);
    const [successToastStatus, setSuccessToastStatus] = useState(false);
    const [title, setTitle] = useState("User");
    const authorize = () => navigate("/");

    useEffect(() => {
        const authorization =
            user.userInfor?.role === "CUSTOMER" || user.userInfor === null;
        if (authorization) authorize();
    }, []);

    return (
        <AdminLayout
            setRerender={setIsRerender}
            title={title}
            setTitle={setTitle}
        >
            {title === "User" && (
                <UserDashboard
                    isRerender={isRerender}
                    setIsRerender={setIsRerender}
                    successToastStatus={successToastStatus}
                    setSuccessToastStatus={setSuccessToastStatus}
                />
            )}
            {title === "Product" && (
                <ProductDashboard
                    isRerender={isRerender}
                    setIsRerender={setIsRerender}
                    successToastStatus={successToastStatus}
                    setSuccessToastStatus={setSuccessToastStatus}
                />
            )}
            {/* <Grid container spacing={3}>
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
            /> */}

            <ToastSuccess
                successToastStatus={successToastStatus}
                setSuccessToastStatus={setSuccessToastStatus}
            ></ToastSuccess>
        </AdminLayout>
    );
};
