import React from "react";
import { createContext, useState, useEffect } from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import PrimaryButton from "../components/primaryButton";
import SecondaryButton from "../components/secondaryButton";
import Title from "../components/title";
import Price from "../components/price";
import { CiDeliveryTruck } from "react-icons/ci";

export const CartContext = createContext();

export default function Cart() {
    return (
<> <NavLink to="/products">
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
        <Card maxWidth='xl' sx={{  p: 6, m: 5 }}>
          <CardContent>
            <Title val={"Shopping Cart"} />
          </CardContent>

          <CardContent>
            <Price val={"Sum:"} />
            <Price val={"Delivery: 0"} />
            <Price val={"Total:"} />
            <NavLink to="/checkout">
                <PrimaryButton val={"Checkout"} />
            </NavLink>
          </CardContent>
        </Card>
      </div> 
    </>
    ) }