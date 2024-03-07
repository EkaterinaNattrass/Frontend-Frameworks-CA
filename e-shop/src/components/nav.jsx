import * as React from "react";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { MdOutlineShoppingBasket } from "react-icons/md";

export default function Nav() {
  return (
    <Box sx={{ width: 500 }}>
      <Link to="/cart">
        <MdOutlineShoppingBasket size={30} />
      </Link>
    </Box>
  );
}
