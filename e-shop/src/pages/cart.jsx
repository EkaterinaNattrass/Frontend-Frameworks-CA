import React from "react";
import Button from "@mui/material/Button";
import { FaArrowLeft } from "react-icons/fa";
import Grid from "@mui/material/Unstable_Grid2";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import { MdDelete } from "react-icons/md";

export default function Cart() {
  return (
    <>
      <NavLink to="/products">
        <Button variant="outlined" color="secondary" sx={{ m: 5 }}>
          <FaArrowLeft /> Continue Shopping
        </Button>
      </NavLink>

      <Typography variant="subtitle2" component="div" sx={{ m: 5 }} >
        For members: Free delivery with all orders
      </Typography>
      <Grid container>
        <div className="CartContainer">
          <Card sx={{ maxWidth: 800, p: 6, m: 5 }}>
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Shopping Cart
              </Typography>
              <MdDelete size={20} />
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 800, p: 6, m: 5 }}>
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Total :
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                Delivery : 0
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                Sum :
              </Typography>
              <NavLink to="/checkout">
                <Button variant="contained" color="secondary" sx={{ m: 5 }}>
                  Checkout
                </Button>
              </NavLink>
            </CardContent>
          </Card>
        </div>
      </Grid>
    </>
  );
}
