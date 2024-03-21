import Typography from "@mui/material/Typography";

export default function Title({ val }) {
  return (
    <Typography gutterBottom variant="h5" component="div">
      {val}
    </Typography>
  );
}
