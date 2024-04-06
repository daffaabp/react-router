import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
return (
<>
    <ul>
        <li>
            <a href="/">
                Home
            </a>
        </li>
        <li>
            <a href="/cars">
                Cars
            </a>
        </li>
        <li>
            <a href="/contact">
                Contact
            </a>
        </li>
        <li>
            <a href="/about">
                About
            </a>
        </li>
    </ul>
</>
);
};

export default Navigation;
