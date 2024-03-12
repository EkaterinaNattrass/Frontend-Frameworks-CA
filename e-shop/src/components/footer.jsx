import * as React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";
import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <footer>
      <div>
        <Typography variant="h5" sx={{ mb: 6 }}>
          About
        </Typography>
        <p>
          {" "}
          <Typography variant="subtitle1">Our story</Typography>
        </p>
        <p>
          {" "}
          <Typography variant="subtitle1">Our team</Typography>
        </p>
        <p>
          {" "}
          <Typography variant="subtitle1">Career</Typography>
        </p>
      </div>
      <div>
        <Typography variant="h5" sx={{ mb: 6 }}>
          Company
        </Typography>
        <p>
          {" "}
          <Typography variant="subtitle1">Our services</Typography>
        </p>
        <p>
          {" "}
          <Typography variant="subtitle1">Delivery</Typography>
        </p>
        <p>
          {" "}
          <Typography variant="subtitle1"><NavLink to="/contact" className="Footlink">Contacts </NavLink></Typography>
        </p>
      </div>
      
      <div>
      <Typography variant="h5" sx={{ mb: 6 }}>
          Social Media
        </Typography>
        <p>
          <Link to="https://www.facebook.com/" className="Footlink">
            <FaFacebook size={20} />
          </Link>
        </p>
        <p>
          <Link to="https://www.instagram.com/" className="Footlink">
            <FaInstagramSquare size={20} />
          </Link>
        </p>
      </div>
    </footer>
  );
}
