import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Alert } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import AssignmentReturnIcon from "@mui/icons-material/AssignmentReturn";

export const ToastSuccess = ({ successToastStatus, setSuccessToastStatus }) => {
    const handleClose = (event, reason) => {
        setSuccessToastStatus(false);
    };

    const action = (
        <React.Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

    return (
        <div>
            <Snackbar
                open={successToastStatus}
                autoHideDuration={6000}
                onClose={handleClose}
                action={action}
            >
                <Alert
                    onClose={handleClose}
                    severity="success"
                    sx={{
                        width: "300px",
                        backgroundColor: "#137134",
                        color: "white",
                    }}
                >
                    Cập nhật thành công!
                </Alert>
            </Snackbar>
        </div>
    );
};

export const ToastPageChange = () => {
    const location = useLocation();
    const [url, setUrl] = React.useState(
        location.pathname.includes("dashboard") ? "/" : "/dashboard"
    );
    const [name, setName] = React.useState(
        location.pathname.includes("dashboard") ? "Bán hàng" : "Quản trị"
    );

    const handleSwitch = () => {
        if (url.includes("dashboard")) {
            setName("Bán hàng", setUrl("/"));
        } else {
            setName("Quản trị", setUrl("/dashboard"));
        }
    };

    const navigate = useNavigate();
    const handlePageChange = () => {
        // console.log("swtich");
        navigate(url);
        handleSwitch();
    };

    return (
        <div>
            <Snackbar
                open={true}
                autoHideDuration={6000}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                }}
            >
                <Button
                    sx={{
                        height: "60px",
                        fontSize: "16px",
                        backgroundColor: "#e28743",
                        fontWeight: "600",
                        width: "180px",
                    }}
                    variant="contained"
                    onClick={() => handlePageChange()}
                >
                    {name}
                    <AssignmentReturnIcon sx={{ marginLeft: "12px" }} />
                </Button>
            </Snackbar>
        </div>
    );
};
