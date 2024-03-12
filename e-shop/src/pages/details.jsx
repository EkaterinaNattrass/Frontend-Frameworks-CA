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

export default function Details() {
  const [product, setProduct] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();
  const API_URL = "https://v2.api.noroff.dev/online-shop/" + id;

  useEffect(() => {
    async function getProduct() {
      try {
        setIsLoading(true);
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        const APIdata = result.data;
        setIsLoading(false);
        setProduct(APIdata);
      } catch (err) {
        setError("Sorry, something went wrong");
      }
    }
    getProduct();
  }, [API_URL]);

  return (
    <div className="ProductContainer">
      { error ? (
        <Link to="/products">
          <Button color="error">
            {error} <br />
            Back to the products
          </Button>
        </Link>
      ) :
      isLoading ? (
        <Typography gutterBottom variant="body1" color="text.secondary">
          Loading...
        </Typography>
      ) : (
        <Box sx={{ flexGrow: 1, p: 6 }}>
          <Grid container spacing={6}>
            <Card key={product.id} sx={{ maxWidth: 600, p: 6 }}>
              <CardMedia
                component="img"
                sx={{ height: 200 }}
                // image={product.image.url}
                title="image of a product"
              />
              <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                  {product.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {product.description}
                </Typography>
                <Typography
                  sx={{ mt: 2 }}
                  gutterBottom
                  variant="body2"
                  color="text.secondary"
                >
                  {product.price}
                </Typography>
                <Typography
                  sx={{ mt: 2 }}
                  gutterBottom
                  variant="body2"
                  color="text.secondary"
                >
                 Only now!!! {product.discountedPrice}
                </Typography>
              </CardContent>
              <CardActions>
                <div className="ButtonContainer">
                  <Link to={"/products"}>
                    <Button variant="outlined" color="secondary">
                      Back to the products
                    </Button>
                  </Link>
                  <Button variant="contained" color="secondary">
                      Add to Cart
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