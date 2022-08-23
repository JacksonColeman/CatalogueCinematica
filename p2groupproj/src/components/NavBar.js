import React from 'react'
import { NavLink } from "react-router-dom"


function NavBar () {
    return(
        <div className="navbar">
            <NavLink exact to ="/"> Home </NavLink>
            <NavLink to="/yourfilmlist"> Your Film List </NavLink>
            <NavLink to="/addfilms"> Add Films to List </NavLink>
        </div>
    )
}

export default NavBar