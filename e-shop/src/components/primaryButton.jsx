import Button from "@mui/material/Button";

export default function PrimaryButton({ val }) {
  return (
    <Button variant="contained" color="secondary" size="large" sx={{ m: 2 }}>
      {val}
    </Button>
  );
}
