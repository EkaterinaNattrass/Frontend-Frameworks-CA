import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import PrimaryButton from "../components/primaryButton";
import SecondaryButton from "../components/secondaryButton";
import Title from "../components/title";
import Price from "../components/price";
import { CiDeliveryTruck } from "react-icons/ci";

export default function Cart() {
  return (
    <>
      <NavLink to="/products">
        <SecondaryButton val={"Back to the products"} />
      </NavLink>
      <div className="OfferContainer">
        <Typography variant="body2" component="div" sx={{ m: 3 }}>
          <CiDeliveryTruck />
          <span className="SpecialOffer">
            Spring offer: Free delivery on all orders
          </span>
          <CiDeliveryTruck />
        </Typography>
      </div>
      <div className="CartContainer">
        <Card sx={{ maxWidth: 800, p: 6, m: 5 }}>
          <CardContent>
            <Title val={"Shopping Cart"} />
          </CardContent>
       
          <CardContent>
            < Price val={'Sum:'}/>
            < Price val={'Delivery: 0'}/>
            < Price val={'Total:'}/>
            <NavLink to="/checkout">
              <Link to={"/checkout"}>
                <PrimaryButton val={"Checkout"} />
              </Link>
            </NavLink>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
