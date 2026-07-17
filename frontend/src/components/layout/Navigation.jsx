import { NavLink } from "react-router-dom";
import { ROUTES } from "../../constants";

export default function Navigation() {
    return (
        <nav>
            <NavLink to={ROUTES.HOME}>Home</NavLink>{" | "}
            <NavLink to={ROUTES.PRODUCTS}>Products</NavLink>{" | "}
            <NavLink to={ROUTES.CART}>Cart</NavLink>{" | "}
            <NavLink to={ROUTES.ORDERS}>Orders</NavLink>{" | "}
            <NavLink to={ROUTES.LOGIN}>Login</NavLink>{" | "}
            <NavLink to={ROUTES.REGISTER}>Register</NavLink>
        </nav>
    );
}