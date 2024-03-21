import CardMedia from "@mui/material/CardMedia";

export default function ImageFull({ val }) {
  return (
    <CardMedia sx={{ height: 400 }} image={val} title="image of the product" />
  );
}
