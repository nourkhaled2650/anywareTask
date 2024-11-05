import { Box, Button } from "@mui/material";
import { login } from "../state/clientState/userSlice";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useAppSelector((state) => state.user.isLoggedIn);
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/dashboard");
    }
  }, [isLoggedIn]);
  return (
    <Box
      sx={{
        background: "linear-gradient(to bottom, #2c5f87, #49a3b7)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src="/logo.png" style={{ width: "200px" }}></img>
      <Button
        variant="contained"
        sx={{ color: "#fff" }}
        onClick={() => {
          dispatch(login());
        }}
      >
        Sign In
      </Button>
    </Box>
  );
};
export default HomePage;
