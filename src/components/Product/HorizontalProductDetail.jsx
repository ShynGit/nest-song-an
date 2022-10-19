import * as React from "react";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, Grid, TextField } from "@mui/material";

export const HorizontalProductDetail = ({
    id,
    image,
    name,
    price,
    deal,
    desc,
}) => {
    const theme = useTheme();

    const [proPrice, setProPrice] = useState(price);
    const [proName, setProName] = useState(name);
    const [proDesc, setProDesc] = useState(desc);

    const handleNameChange = (e) => {
        setProName(e.target.value);
    };

    const handlePriceChange = (e) => {
        setProPrice(e.target.value);
    };

    const handleDescChange = (e) => {
        setProDesc(e.target.value);
    };

    return (
        <Grid item xs={12}>
            <Card sx={{ display: "flex", paddingRight: "20px" }}>
                <Grid item xs={1.5}>
                    <CardMedia
                        component="img"
                        sx={{ width: 166, height: 166 }}
                        image={image}
                        alt="Live from space album cover"
                    />
                </Grid>
                <Grid
                    item
                    xs={3}
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <CardContent sx={{ flex: "1 0 auto" }}>
                        <TextField
                            id="outlined-basic"
                            label="Name"
                            variant="outlined"
                            required
                            fullWidth
                            value={proName}
                            onChange={handleNameChange}
                        ></TextField>
                    </CardContent>
                </Grid>

                <Grid item xs={4.5}>
                    <CardContent sx={{ flex: "1 0 auto" }}>
                        <TextField
                            id="outlined-multiline-static"
                            label="Description"
                            variant="outlined"
                            multiline
                            fullWidth
                            maxRows={4}
                            value={proDesc}
                            onChange={setProDesc}
                        ></TextField>
                    </CardContent>
                </Grid>

                <Grid item xs={1} display="flex" alignItems="center">
                    <TextField
                        id="outlined-basic"
                        label="Price"
                        variant="outlined"
                        required
                        value={proPrice}
                        onChange={handlePriceChange}
                    ></TextField>
                </Grid>
                <Grid
                    item
                    xs={2}
                    display="flex"
                    justifyContent="space-around"
                    alignItems="center"
                >
                    <Button variant="contained">Xóa SPham</Button>
                    <Button variant="contained">Xóa SPham</Button>
                </Grid>
            </Card>
        </Grid>
    );
};
