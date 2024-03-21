import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import "../App.css";
import Image from "../components/image";
import Title from "../components/title";
import Price from "../components/price";
import Description from "../components/description";
import PrimaryButton from "../components/primaryButton";
const API_URL = "https://v2.api.noroff.dev/online-shop";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [isError, setIsError] = useState(false);
  const [search, setSearch] = useState("");

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log(`searching ${search}`);
  };

  useEffect(() => {
    async function getProducts() {
      try {
        setIsError(false);
        const response = await fetch(API_URL);
        const result = await response.json();
        const APIproducts = result.data;
        setProducts(APIproducts);
        console.log(APIproducts);
      } catch (err) {
        setIsError(true);
      }
    }
    getProducts();
  }, []);
  if (isError) {
    return <div>Error loading data</div>;
  }
  return (
    <>
      <div className="ProductsContainer">
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 2, width: "25ch", height: "15ch" },
          }}
          noValidate
          onSubmit={handleOnSubmit}
          autoComplete="off"
        >
          <TextField
            onChange={(e) => setSearch(e.target.value)}
            id="outlined-basic"
            name="searchQuery"
            type="search"
            label="Search the products"
            variant="outlined"
            color="secondary"
          />
        </Box>
        <Grid container spacing={6}>
          {products
            .filter((product) => {
              return search.toLowerCase() === ""
                ? product
                : product.title.toLowerCase().includes(search);
            })
            .map((product) => (
              <Grid key={product.id} xs={6}>
                <Card sx={{ maxWidth: 600 }}>
                  <Image val={product.image.url} />
                  <CardContent>
                    <Title val={product.title} />
                    <Price val={product.price} />
                    <Description val={product.description} />
                  </CardContent>
                  <CardActions>
                    <Link to={`/products/${product.id}`}>
                      <PrimaryButton val={"View product"} />
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
