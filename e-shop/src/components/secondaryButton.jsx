import Button from "@mui/material/Button";

export default function SecondaryButton({ val }) {
  return (
    <Button variant="outlined" color="secondary" sx={{ m: 2 }}>
      {val}
    </Button>
  );
}
