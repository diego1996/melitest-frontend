import * as React from 'react';
import {Divider, Grid, Link, Typography} from "@mui/material";
import image from "../../../assets/images/cicla.jpeg";
import Image from 'mui-image'
import ShippingIcon from '@mui/icons-material/LocalShipping';
import {green} from "@mui/material/colors";
import Container from "@mui/material/Container";

export default function ProductCardComponent() {
    return (
        <div>
            <Container style={{marginTop: "20px"}}>
                <Grid container spacing={2}>
                    <Grid item xs={4} md={3}>
                        <Link href="/items/1" underline="none">
                            <Image width={"100%"} height={"95%"}
                                   fit={"fill"}
                                   showLoading={true}
                                   errorIcon={false}
                                   src={image}
                                   alt={"Producto"}/>
                        </Link>
                    </Grid>
                    <Grid item xs={6} md={5}>
                        <Link href="/items/1" underline="none" color="inherit">
                            <Typography variant="h5" gutterBottom component="div">
                                $ 0.00 <ShippingIcon sx={{color: green[500]}}/>
                            </Typography>
                            <Typography>
                                Este es el Titulooooooooooooooooooooo completo del producto que puede ser mas largo
                            </Typography>
                        </Link>
                    </Grid>
                    <Grid item xs={2} md={4} align={"right"}>
                        <Typography variant="text" gutterBottom component="div">Ciudad</Typography>
                    </Grid>
                </Grid>
            </Container>
            <Divider variant="middle"/>

        </div>
    );
}
