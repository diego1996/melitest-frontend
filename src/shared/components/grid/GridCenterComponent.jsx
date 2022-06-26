import * as React from 'react';
import {Grid} from "@mui/material";


export default function GridCenterComponent(props) {

    return (
        <Grid container>
            <Grid item xs/>
            <Grid item xs={12} md={10}>
                {props.children}
            </Grid>
            <Grid item xs/>
        </Grid>
    );
}
