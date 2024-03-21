import Typography from "@mui/material/Typography";

export default function Discount({ val }) {
  return (
    <Typography gutterBottom variant="body1" color="text.secondary" component="div">
    Discount: {val} nok
    </Typography>
  );
}