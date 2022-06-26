import * as React from 'react';
import ProductListNotFoundComponent from "./ProductListNotFoundComponent";
import ProductCardComponent from "./ProductCardComponent";
import {Pagination} from "@mui/material";

export default function ProductListComponent(props) {
    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };

    function Center({children}) {
        return (
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                {children}
            </div>
        );
    }

    return (
        <>
            {
                props.search ?
                    <>
                        <div style={{backgroundColor: "#fff", marginBottom: "50px", marginTop: "30px"}}>
                            <ProductCardComponent/>
                        </div>
                        <Center><Pagination count={10} page={page} onChange={handleChange}/></Center>
                    </> :
                    <div style={{backgroundColor: "#fff", marginTop: "60px"}}>
                        <ProductListNotFoundComponent/>
                    </div>
            }
        </>
    );
}
