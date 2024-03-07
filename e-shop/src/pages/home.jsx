import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Nav from "../components/nav";
import '../App.css';

export default function Home() {
  return (
    <>
    < Nav />
      <div className="HomePage">
        <Typography variant="h1" sx={{ mb: 8 }}>
          Find Everything, Anytime, Anywhere
        </Typography>
        <Link to="/products">
          <Button size="large" variant="outlined">
            Browse Products
          </Button>
        </Link>
      </div>
    </>
  );
}
