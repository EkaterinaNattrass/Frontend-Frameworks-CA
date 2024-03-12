import * as React from "react";
import Box from "@mui/material/Box";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";

export default function Nav() {
  return (
    <header>
      <nav>
          <Box>
          <NavLink to="/home" className="Navlink">
        < FaHome size={20}/>
      </NavLink>
      <NavLink to="/account" className="Navlink">
        <FaPerson size={20} />
      </NavLink>
      <NavLink to="/favourite" className="Navlink">
        <FaHeart size={20} />
      </NavLink>
      <NavLink to="/cart" className="Navlink">
        <FaShoppingCart size={20}/>
      </NavLink>
    </Box>
      </nav>
    </header>
  );
}
