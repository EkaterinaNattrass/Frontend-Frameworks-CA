import CardMedia from "@mui/material/CardMedia";

export default function Image({ val }) {
  return (
    <CardMedia sx={{ height: 200 }} image={val} title="image of the product" />
  );
}
