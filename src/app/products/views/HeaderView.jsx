import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import logo from '../../../assets/logos/logo-meli.png';
import SearchComponent from "../../../shared/components/search/SearchComponent";
import GridCenterComponent from "../../../shared/components/grid/GridCenterComponent";
import {Box} from "@mui/material";

export default function HeaderView() {
    return (
        <AppBar position="static" color="primary">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <GridCenterComponent>
                        <Box sx={{width: 1}}>
                            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
                                <Box gridColumn="span 1">
                                    <a href="/">
                                        <img style={{marginTop: "2px"}} height={"40"} src={logo} alt={"Logo mercado libre"}/>
                                    </a>
                                </Box>
                                <Box gridColumn="span 11">
                                    <SearchComponent/>
                                </Box>
                            </Box>
                        </Box>
                    </GridCenterComponent>
                </Toolbar>
            </Container>
        </AppBar>
    );
};