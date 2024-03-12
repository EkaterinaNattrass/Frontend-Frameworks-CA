import * as React from "react";
import Box from "@mui/material/Box";
import { NavLink } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import { FaCommentDots } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";

export default function Nav() {
  return (
    <header>
      <nav>
          <Box>
          <NavLink to="/" className="Navlink">
        < FaHome size={20}/>
      </NavLink>
      <NavLink to="/contact" className="Navlink">
        <FaCommentDots size={20} />
      </NavLink>
      <NavLink to="/favourite" className="Navlink">
        <FaHeart size={20} />
      </NavLink>
      <NavLink to="/cart" className="Navlink">
        <FaCartShopping size={20}/>
      </NavLink>
    </Box>
      </nav>
    </header>
  );
}
