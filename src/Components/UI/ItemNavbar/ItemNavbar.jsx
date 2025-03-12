import React from "react";
import { NavLink } from "react-router-dom";


export const ItemNavbar = ({content, styles, route}) => {
    return (
        <li className="flex">
            <NavLink className={styles}  to={route}>{content}</NavLink>
        </li>
    )
}