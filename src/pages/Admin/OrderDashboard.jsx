import { Grid, Input, Pagination } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import { accountApi } from "../../api/accountApi";
import { HorizontalUserDetail } from "../../components/User/HorizontalUserDetail";

export const OrderDashboard = ({
    isRerender,
    setIsRerender,
    successToastStatus,
    setSuccessToastStatus,
}) => {
    const [pageCount, setPageCount] = useState(1);
    const [orders, setOrders] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        accountApi
            .getCountAllAccount()
            .then((res) => setPageCount(res))
            .catch((err) => {
                console.log(err);
            });

        return () => {};
    }, []);

    useEffect(() => {
        accountApi
            .getAllAccountByPage(currentPage, 8)
            .then((res) => setUsers(res))
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setIsRerender(false);
            });
    }, [isRerender]);

    console.log(users);
    const handleChangePage = (e, page) => {
        setCurrentPage(page);
    };

    return (
        <div>
            {/* <Input variant="outlined" sx={{ backgroundColor: "white" }} /> */}
            <Grid container spacing={3}>
                {users.map((user) => (
                    <HorizontalUserDetail
                        user={user}
                        currentPage={currentPage}
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
