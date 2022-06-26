import * as React from 'react';
import {Breadcrumbs, Link, Typography} from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

export default function BreadcrumbComponent() {
    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
            MUI
        </Link>,
        <Typography key="3" color="text.primary">
            Breadcrumb
        </Typography>,
    ];

    return (
        <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small"/>} style={{marginTop: 20, marginBottom: 20}}
            aria-label="breadcrumb"
        >
            {breadcrumbs}
        </Breadcrumbs>
    );
}
