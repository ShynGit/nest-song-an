import {
    Button,
    Dialog,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
export const HeaderBottom = () => {
    const active = useLocation().pathname.slice(1, 100);
    const [openContactBox, setOpenContactBox] = useState(false);

    const handleSend = () => {};

    return (
        <>
            <nav className="flex md:justify-center items-center justify-around text-sm text-white">
                <Link
                    to="/"
                    className={`transition-colors flex items-center duration-300 h-full px-3 ${
                        active === "" ? "bg-regal-blue/60" : ""
                    }`}
                    onClick={() => window.scrollTo(0, 0)}
                >
                    Trang chủ
                </Link>
                <Link
                    to="/introduction"
                    className={`transition-colors flex items-center duration-300 h-full px-3 ${
                        active === "introduction" ? "bg-regal-blue/60" : ""
                    }`}
                    onClick={() => window.scrollTo(0, 0)}
                >
                    Giới thiệu
                </Link>
                <Link
                    to="/production"
                    className={`transition-colors flex items-center duration-300 h-full px-3 ${
                        active === "production" ? "bg-regal-blue/60" : ""
                    }`}
                    onClick={() => window.scrollTo(0, 0)}
                >
                    Sản phẩm
                </Link>
                <Link
                    to="/new"
                    className={`transition-colors flex items-center duration-300 h-full px-3 ${
                        active === "new" ? "bg-regal-blue/60" : ""
                    }`}
                    onClick={() => window.scrollTo(0, 0)}
                >
                    Tin tức
                </Link>
                <button
                    className={`transition-colors flex items-center duration-300 h-full px-3`}
                    onClick={() => setOpenContactBox(true)}
                >
                    Liên hệ
                </button>
            </nav>
            {openContactBox && (
                <Dialog
                    open={openContactBox}
                    onClose={() => setOpenContactBox(false)}
                    sx={{ textAlign: "center" }}
                >
                    <DialogTitle id="alert-dialog-title">LIÊN HỆ</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Bạn có chắc chắn hủy đơn hàng?
                        </DialogContentText>
                    </DialogContent>
                    <Box
                        display="grid"
                        gridTemplateColumns="repeat(3, minmax(0, 1fr))"
                        gap="10px"
                        justifyItems="center"
                    ></Box>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            marginY: "10px",
                        }}
                    >
                        <Button onClick={() => handleSend()} color="error">
                            Hủy đơn
                        </Button>
                        <Button
                            onClick={() => setOpenContactBox(false)}
                            autoFocus
                        >
                            Đóng
                        </Button>
                    </Box>
                </Dialog>
            )}
        </>
    );
};
