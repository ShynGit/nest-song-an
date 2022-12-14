import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { convertPriceToString } from "../../utils/serverUtils";
import { Link } from "react-router-dom";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Rating,
    TextField,
} from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import { Box } from "@mui/system";
// import { Rating } from "react-simple-star-rating";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#00ADB5",
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
        border: 0,
    },
}));

function createData(id, product, quantity, price) {
    return {
        id,
        product,
        quantity,
        price,
    };
}

export const OrderCard = ({ card, handleCancelOrder, handleSendRating }) => {
    const [confirmBox, setConfirmBox] = React.useState(false);
    const [ratingBox, setRatingBox] = React.useState(false);
    const rows = card.listBillDetails.map((data) =>
        createData(data.id, data.product, data.quantity, data.price)
    );
    const [rating, setRating] = React.useState(1);
    const [comment, setComment] = React.useState("");

    const status = [
        { color: "", title: "" },
        { color: "", title: "" },
        { color: "text-amber-500", title: "??ang giao" },
        { color: "text-green-400", title: "???? ho??n th??nh" },
        { color: "text-red-600", title: "???? h???y" },
    ];

    const paymentStatus = {
        "Ch??a Thanh To??n": "text-red-600",
        "???? Thanh To??n": "text-sky-600",
    };

    var d = new Date(card.date);

    return (
        <>
            {confirmBox && (
                <Dialog
                    open={confirmBox}
                    onClose={() => setConfirmBox(false)}
                    sx={{ textAlign: "center" }}
                >
                    <DialogTitle id="alert-dialog-title">
                        <CancelIcon
                            sx={{
                                // fontSize: "px",
                                margin: "8px",
                                width: "65px",
                                height: "65px",
                                color: "red",
                                opacity: "0.8",
                            }}
                        />
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            B???n c?? ch???c ch???n h???y ????n h??ng?
                        </DialogContentText>
                    </DialogContent>
                    <Box
                        display="grid"
                        gridTemplateColumns="repeat(3, minmax(0, 1fr))"
                        gap="10px"
                        justifyItems="center"
                    >
                        {rows.map((row) => (
                            <img
                                src={row.product.listImages[0].imgPath}
                                className="w-16 h-16 object-cover"
                            />
                        ))}
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            marginY: "10px",
                        }}
                    >
                        <Button
                            onClick={() => handleCancelOrder(card.id)}
                            color="error"
                        >
                            H???y ????n
                        </Button>
                        <Button onClick={() => setConfirmBox(false)} autoFocus>
                            ????ng
                        </Button>
                    </Box>
                </Dialog>
            )}
            {ratingBox && (
                <Dialog
                    open={ratingBox}
                    onClose={() => setRatingBox(false)}
                    sx={{ textAlign: "center" }}
                >
                    <DialogTitle id="alert-dialog-title">
                        <ThumbUpOutlinedIcon
                            sx={{
                                // fontSize: "px",
                                margin: "8px",
                                width: "65px",
                                height: "65px",
                                color: "green",
                                opacity: "0.8",
                            }}
                        />
                    </DialogTitle>
                    <Box className="mx-28">
                        <Rating
                            name="size-large"
                            value={rating}
                            defaultValue={1}
                            sx={{ fontSize: 45 }}
                            onChange={(event, newValue) => {
                                setRating(newValue);
                            }}
                        />
                    </Box>
                    <TextField
                        id="filled-multiline-flexible"
                        label="Nh???n x??t"
                        multiline
                        rows={3}
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        variant="filled"
                        sx={{ marginX: "20px", marginY: "10px" }}
                    />
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            marginY: "10px",
                        }}
                    >
                        <Button
                            onClick={() =>
                                handleSendRating(rating, comment, () =>
                                    setRatingBox(false)
                                )
                            }
                            color="success"
                            autoFocus
                        >
                            ????nh gi??
                        </Button>
                        <Button onClick={() => setRatingBox(false)}>
                            ????ng
                        </Button>
                    </Box>
                </Dialog>
            )}
            <div className="my-9 border p-3 rounded-md shadow-lg bg-white">
                <div className="flex justify-between p-5 px-2 text-[1.2rem]">
                    <div>
                        <div className="font-medium text-black">
                            Giao h??ng t???i {card.address}, S??T:{" "}
                            {card.phoneNumber}
                        </div>
                        <div className="font-medium text-black">
                            Ng??y ?????t h??ng: {d.toLocaleString()}
                        </div>
                    </div>
                    <div
                        className={`${
                            status[card.status].color
                        } font-semibold text-[1.4rem]`}
                    >
                        {status[card.status].title}
                    </div>
                </div>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell
                                    sx={{
                                        fontSize: 18,
                                        width: 900,
                                        fontWeight: "550",
                                    }}
                                >
                                    S???n ph???m
                                </StyledTableCell>
                                <StyledTableCell
                                    align="center"
                                    sx={{ fontSize: 18, fontWeight: "550" }}
                                >
                                    ????n gi??
                                </StyledTableCell>
                                <StyledTableCell
                                    align="center"
                                    sx={{ fontSize: 18, fontWeight: "550" }}
                                >
                                    S??? l?????ng
                                </StyledTableCell>
                                <StyledTableCell
                                    align="center"
                                    sx={{ fontSize: 18, fontWeight: "550" }}
                                >
                                    Th??nh ti???n
                                </StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    sx={{
                                        "&:last-child td, &:last-child th": {
                                            border: 0,
                                        },
                                    }}
                                >
                                    <TableCell component="th" scope="row">
                                        <div className="grid grid-cols-12 font-verda">
                                            <Link
                                                to={`/production/${row.product.id}`}
                                                onClick={() =>
                                                    window.scrollTo(0, 0)
                                                }
                                            >
                                                <img
                                                    src={
                                                        row.product
                                                            .listImages[0]
                                                            .imgPath
                                                    }
                                                    className="w-16 h-16 object-cover"
                                                />
                                            </Link>
                                            <div className="col-span-8 ml-3">
                                                <Link
                                                    to={`/production/${row.product.id}`}
                                                    onClick={() =>
                                                        window.scrollTo(0, 0)
                                                    }
                                                >
                                                    <div className="text-base uppercase font-bold text-left text-slate-600">
                                                        {row.product.name}
                                                    </div>
                                                </Link>
                                                <div className="truncate text-xs text-gray-400">
                                                    {row.product.description}
                                                </div>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell align="center">
                                        {convertPriceToString(
                                            row.product.basePrice
                                        )}
                                    </TableCell>
                                    <TableCell align="center">
                                        {row.quantity}
                                    </TableCell>
                                    <TableCell align="center">
                                        {convertPriceToString(row.price)}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <div>
                    <div className="text-right px-6 pt-4 text-lg font-medium w-full">
                        T???ng:
                        <span
                            className="text-green-600 font-semibold ml-4"
                            style={{
                                textShadow:
                                    "0px 1px 2px rgb(198, 245, 218, 0.8), 1px 2px 4px rgb(198, 245, 218, 0.8)",
                            }}
                        >
                            {convertPriceToString(card.totalPrice)} VN??
                        </span>
                    </div>

                    <div className="relative mr-6 mb-4">
                        {card.status === 3 ? (
                            <Button
                                variant="contained"
                                color="success"
                                sx={{
                                    marginLeft: "20px",
                                    fontWeight: "600",
                                    fontSize: "16px",
                                    borderRadius: "5px",
                                    width: "150px",
                                    height: "50px",
                                    position: "absolute",
                                    left: "-20px",
                                    bottom: "4px",
                                }}
                                onClick={() => setRatingBox(true)}
                            >
                                ????nh gi??
                            </Button>
                        ) : null}
                        {card.status === 2 ? (
                            <Button
                                variant="contained"
                                color="error"
                                sx={{
                                    marginLeft: "20px",
                                    fontWeight: "600",
                                    fontSize: "16px",
                                    borderRadius: "5px",
                                    width: "150px",
                                    height: "50px",
                                    position: "absolute",
                                    left: "-20px",
                                    bottom: "4px",
                                }}
                                onClick={() => setConfirmBox(true)}
                            >
                                H???y ????n
                            </Button>
                        ) : (
                            <div></div>
                        )}
                        <div
                            className={`${
                                paymentStatus[card.paymentStatusCode]
                            } text-right text-xl font-semibold`}
                        >
                            {card.status !== 4 && card.paymentStatusCode}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
