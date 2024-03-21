import Typography from "@mui/material/Typography";

export default function Price({ val }) {
  return (
    <Typography gutterBottom variant="h6" component="div">
      {val} nok
    </Typography>
  );
}
