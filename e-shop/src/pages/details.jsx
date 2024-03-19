import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { FaCartShopping } from "react-icons/fa6";

export default function Details() {
  const [product, setProduct] = useState({});
//   const [image, setImage] = useState(null);
  const [error, setError] = useState(null);

  const { id } = useParams();
  const API_URL = "https://v2.api.noroff.dev/online-shop/" + id;

  useEffect(() => {
    async function getProduct() {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        const APIdata = result.data;
        console.log(APIdata)
        setProduct(APIdata);
      } catch (err) {
        setError("Sorry, something went wrong");
      }
    }
    getProduct();
  });

  return (
    <div className="ProductContainer">
      { error ? (
        <Link to="/products">
          <Button color="error">
            {error} <br />
            Back to the products
          </Button>
        </Link>
      ) : (
        <Box sx={{ flexGrow: 1, p: 6 }}>
          <Grid container spacing={6}>
            <Card key={id} sx={{ maxWidth: 800, p: 6, m:5 }}>
            <CardMedia
                          sx={{ height: 400 }}
                     image src={product.image}
                        //   title={product.image.alt}
                        />
              <CardContent>
                <Typography gutterBottom color="#404040" variant="h4" component="div">
                  {product.title}
                </Typography>
               <Typography variant="body1" color="text.secondary">
                  {product.description}
                </Typography>
                <Typography
                  sx={{ mt: 2 }}
                  gutterBottom
                  variant="h6"
                  color="text.secondary"
                >
                  {product.price}
                </Typography>
              <Typography
                  sx={{ mt: 2 }}
                  gutterBottom
                  variant="h6"
                  color="text.secondary"
                >
                 Only now!!! {product.discountedPrice}
                </Typography>
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
                    <Button variant="outlined" color="secondary" sx={{ mr: 2 }}>
                      Back to the products
                    </Button>
                  </Link>
                  <Button variant="contained" color="secondary">
                  <FaCartShopping size={15} /> Add to Cart
                    </Button>
                </div>
              </CardActions> 
            </Card>
          </Grid>
        </Box>
      )}
    </div>
  );
}