import Typography from "@mui/material/Typography";

export default function DiscountedPrice({ val }) {
  return (
    <Typography gutterBottom variant="h6" component="div">
    Only today: {val} nok
    </Typography>
  );
}