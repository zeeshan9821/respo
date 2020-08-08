import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';



const Navbar = () => {
    return (
        <div className="rightpanel">
        <div className="topnav">
        
           
            <NavLink  to="/" style={{ marginRight: 40 }}>Overview</NavLink>
            <NavLink to="/" style={{ marginRight: 40 }}>Packages</NavLink>
            <NavLink to="/" style={{ marginRight: 40 }}>Stars</NavLink>
            <NavLink to="/" style={{ marginRight: 40 }}>Followers</NavLink>
            <NavLink to="/user" style={{ marginRight: 40 }} > UserName</NavLink>
            <NavLink to="/repo" exact={true} style={{ marginRight: 40 }} >Repositories</NavLink>
        </div>
        </div>
    );
};

export default Navbar;