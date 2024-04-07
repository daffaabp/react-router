import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
return (
<>
    <ul>
        <li>
            <NavLink to="/">
                Home
            </NavLink>
        </li>
        <li>
            <NavLink to="/cars">
                Cars
            </NavLink>
        </li>
        <li>
            <NavLink to="/contact">
                Contact
            </NavLink>
        </li>
        <li>
            <NavLink to="/about">
                About
            </NavLink>
        </li>
    </ul>
</>
);
};

export default Navigation;
