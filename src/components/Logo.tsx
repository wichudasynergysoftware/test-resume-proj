import { Box } from "@mui/material";
import { styled, keyframes } from "@mui/system";

const flipAnimation = keyframes`
  0%, 100% {
    transform: rotateY(0);
  }
  50% {
    transform: rotateY(180deg);
    background-color: white;
  }
`;

const FlippingBox = styled(Box)(({ theme }) => ({
  width: 50,
  height: 50,
  backgroundColor: theme.palette.secondary.main,
  animation: `${flipAnimation} 3s infinite`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "8px",
  perspective: "1000px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
}));

export default function Logo() {
  return <FlippingBox />;
}
