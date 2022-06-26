import React from "react";
import Container from "@mui/material/Container";
import GridCenterComponent from "../../../shared/components/grid/GridCenterComponent";
import ProductListComponent from "../../../shared/components/product/ProductListComponent";
import {useSearchParams} from "react-router-dom";
import BreadcrumbComponent from "../../../shared/components/breadcrumb/BreadcumbComponent";

export default function ResultSearchView() {
    const [searchParams] = useSearchParams();
    const search = searchParams.get("search");


    return (
        <Container maxWidth="xl">
            <GridCenterComponent>
                {search ? <BreadcrumbComponent/> : <></>}
                <ProductListComponent search={search}/>
            </GridCenterComponent>
        </Container>
    );
};