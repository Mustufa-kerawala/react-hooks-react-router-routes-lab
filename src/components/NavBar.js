import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  


  return <div>
    <NavLink to="/" exact>Home</NavLink>
    <NavLink to="/actors" exact>Actors</NavLink>
    <NavLink to="/directors" exact>Directors</NavLink>
    <NavLink to="/movies" exact>Movies</NavLink>
  </div>;
}

export default NavBar;
