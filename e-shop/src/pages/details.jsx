import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
//import ImageFull from "../components/imageFull";
import { FaCartShopping } from "react-icons/fa6";
import Title from "../components/title";
import DescriptionFull from "../components/descriptionFull";
import DiscountedPrice from "../components/discountedPrice";
import Discount from "../components/discount";
import Price from "../components/price";
import SecondaryButton from "../components/secondaryButton";

export default function Details() {
  const [product, setProduct] = useState({});
  const [error, setError] = useState(null);

  const { id } = useParams();
  const API_URL = "https://v2.api.noroff.dev/online-shop/" + id;

  useEffect(() => {
    async function getProduct() {
      try {
        const response = await fetch(API_URL);
        const result = await response.json();
        const APIdata = result.data;
        console.log(APIdata);
        setProduct(APIdata);
      } catch (err) {
        setError("Sorry, something went wrong");
      }
    }
    getProduct();
  }, [API_URL]);

  const hasDiscount = product.discountedPrice;

  return (
    <div className="ProductContainer">
      {error ? (
        <Link to="/products">
          <Button color="error">
            {error} <br />
            Back to the products
          </Button>
        </Link>
      ) : (
        <Box sx={{ flexGrow: 1, p: 6 }}>
          <Grid container spacing={6}>
            <Card key={id} sx={{ maxWidth: 800, p: 6, m: 5 }}>
              {/* < ImageFull val={product.image.url} /> */}
              <CardContent>
                <Title val={product.title} />
                <DescriptionFull val={product.description} />
                {hasDiscount ? (
                  <>
                    <DiscountedPrice val={product.discountedPrice} />{" "}
                    <Discount val={product.price - product.discountedPrice} />
                  </>
                ) : (
                  <Price val={product.price} />
                )}

                {/*   <Typography
                  sx={{ mt: 2 }}
                  gutterBottom
                  variant="h6"
                  color="text.secondary"
                >
                 {product.reviews}
                </Typography> */}
              </CardContent>
              <CardActions>
                <div className="ButtonContainer">
                  <Link to={"/products"}>
                    <SecondaryButton val={"Back to the products"} />
                  </Link><Button variant="contained" color="secondary">
                      <FaCartShopping size={15} /> Add to Cart
                    </Button>
                    <div>
                      <Link to={"/cart"}>
                    < SecondaryButton val={<FaCartShopping size={15}/>}/>
                  </Link> 
                    </div>
                 
                </div>
              </CardActions>
            </Card>
          </Grid>
        </Box>
      )}
    </div>
  );
}
