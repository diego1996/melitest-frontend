import React from "react";
import {customLightTheme} from "../themes/LightTheme";
import {ThemeProvider} from "@mui/material";
import HeaderView from "../../app/products/views/HeaderView";
import {Outlet} from "react-router-dom";


export default function BaseLayout() {
    return (
        <ThemeProvider theme={customLightTheme}>
            <HeaderView/>
            <Outlet/>
        </ThemeProvider>
    );
};