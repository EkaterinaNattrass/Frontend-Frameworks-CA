import Typography from "@mui/material/Typography";

export default function Description({ val }) {
  return (
    <Typography variant="body1" color="text.secondary">
      {val}
    </Typography>
  );
}
