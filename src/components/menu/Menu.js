import { NavLink } from "react-router-dom";
import React from "react";

function Menu() {
    return (

        <div>
            <NavLink to="/" className="list-group-item">Home</NavLink>
            <NavLink to="/add-course" className="list-group-item">AddCourse</NavLink>
            <NavLink to="/view-courses" className="list-group-item">ViewCourse</NavLink>
            <NavLink to="/about" className="list-group-item">About</NavLink>
        </div>

    )
}

export default Menu;