import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Layout } from "../components/layout";

import Home from "../pages/home";
import Login from "../pages/login";
import Register from "../pages/register";
import Product from "../pages/product";
import ProductDetails from "../pages/productdetails";
import Cart from "../pages/cart";
import Orders from "../pages/orders";
import NotFound from "../pages/not-found";

import { ROUTES } from "../constants";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path={ROUTES.HOME} element={<Home />} />

                    <Route path={ROUTES.PRODUCTS} element={<Product />} />

                    <Route
                        path={ROUTES.PRODUCT_DETAILS}
                        element={<ProductDetails />}
                    />

                    <Route path={ROUTES.CART} element={<Cart />} />

                    <Route path={ROUTES.ORDERS} element={<Orders />} />
                </Route>

                <Route path={ROUTES.LOGIN} element={<Login />} />

                <Route path={ROUTES.REGISTER} element={<Register />} />

                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}