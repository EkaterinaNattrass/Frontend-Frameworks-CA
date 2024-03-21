import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import PrimaryButton from "../components/primaryButton";
import '../App.css';

export default function Home() {
  return (
    <>
      <div className="HomePage">
        <Typography variant="h1" sx={{ mb: 8 }}>
          Find Everything, Anytime, Anywhere
        </Typography>
        <Link to="/products">
          <PrimaryButton 
           val={'Browse Products'} 
          />
        </Link>
      </div>
    </>
  );
}
