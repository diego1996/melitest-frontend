import React from "react";
import Container from "@mui/material/Container";
import GridCenterComponent from "../../../shared/components/grid/GridCenterComponent";
import BreadcrumbComponent from "../../../shared/components/breadcrumb/BreadcumbComponent";
import {Button, Grid, styled, Typography} from "@mui/material";
import Image from "mui-image";
import image from "../../../assets/images/cicla.jpeg";
import {blue} from "@mui/material/colors";

const ColorButton = styled(Button)(({theme}) => ({
    color: theme.palette.getContrastText(blue[700]),
    width: "100%",
    backgroundColor: blue[700],
    '&:hover': {
        backgroundColor: blue[600],
    },
}));

export default function ProductDetailView() {
    return (
        <Container maxWidth="xl">
            <GridCenterComponent>
                <BreadcrumbComponent/>
                <div style={{backgroundColor: "#fff", marginBottom: "50px"}}>
                    <Grid container spacing={0}>
                        <Grid item xs={8} md={8}>
                            <div style={{margin: "30px 30px 30px 30px"}}>
                                <Image width={"100%"} height={"50%"}
                                       fit={"scale-down"}
                                       showLoading={true}
                                       errorIcon={false}
                                       src={image}
                                       alt={"Producto X"}/>
                                <br/>
                                <h2>Descripción del producto</h2>
                                <Typography align="justify">Aca va la Descripción larga del producto que es Aca va la Descripción larga del producto que es Aca va la Descripción larga del producto que es Aca va la Descripción larga del producto que es ... </Typography>
                            </div>
                        </Grid>
                        <Grid item xs={4} md={4}>
                            <Container>
                                <br/>
                                <Typography>Nuevo - 0 vendidos</Typography>
                                <h2>Titulo completo del producto largo</h2>
                                <h1>$ 0.00</h1>
                                <ColorButton variant="contained">Comprar</ColorButton>
                            </Container>
                        </Grid>
                    </Grid>
                </div>
            </GridCenterComponent>
        </Container>
    );
};