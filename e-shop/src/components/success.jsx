import Typography from "@mui/material/Typography";
import SecondaryButton from "./secondaryButton";
import { Link} from "react-router-dom";

export default function  Success() {
    return(
        <div className="SuccessContainer">
            <Typography variant="body1" color="text.secondary">
           Your purchase was successful! </ Typography>
           <Link to={"/products"}>< SecondaryButton val={'Back to the products'}/></Link> 
        </div>
      )   
}