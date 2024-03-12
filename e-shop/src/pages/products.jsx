import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import '../App.css'; 
const API_URL = "https://v2.api.noroff.dev/online-shop";

export default function Products() {
    const [products, setProducts] = useState([]);
   
    useEffect(() => {
        async function getProducts() {
          try {
            const response = await fetch(API_URL);
            if (!response.ok) {
              throw new Error("Failed to fetch data");
            }
            const result = await response.json();
            const APIproducts = result.data;
            setProducts(APIproducts);
            console.log(APIproducts)
          } catch (err) {
            console.log("Something went wrong");
          }
        }
        getProducts();
      });

      return (
        <>
        <div className="ProductsContainer">
              <Grid container spacing={6}>
                {products.map((product) => (
                    <Grid key={product.id} xs={6}>
                      <Card sx={{ maxWidth: 600 }}>
                        <CardMedia
                          sx={{ height: 200 }}
                        image={product.image.url}
                          title="image of the product"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            {product.title}
                          </Typography>
                          <Typography gutterBottom variant="h6" component="div">
                            {product.price}
                          </Typography>
                          <Typography variant="body1" color="text.secondary" noWrap>
                            {product.description}
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <Link to={`/products/${product.id}`}>
                            <Button
                              variant="outlined"
                              color="secondary"
                              sx={{ m: 2 }}
                            >
                              View product
                            </Button>
                          </Link>
                        </CardActions>
                      </Card>
                    </Grid>
                  ))}
              </Grid>
        </div>
        </>
        
      );
    }