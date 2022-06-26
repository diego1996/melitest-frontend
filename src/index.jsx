import React from "react";
import ReactDOM from 'react-dom/client';
import './shared/styles/index.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import BaseLayout from "./shared/layouts/BaseLayout";
import ResultSearchView from "./app/products/views/ResultSearchView";
import ProductDetailView from "./app/products/views/ProductDetailView";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<BaseLayout/>}>
                <Route path="items" element={<ResultSearchView/>}/>
                <Route path="items/:id" element={<ProductDetailView/>}/>
            </Route>
            <Route
                path="*"
                element={
                    <main style={{padding: "1rem"}}>
                        <p>There's nothing here!</p>
                    </main>
                }
            />
        </Routes>
    </BrowserRouter>
);

