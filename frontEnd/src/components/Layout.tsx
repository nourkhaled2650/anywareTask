import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import Sidebar from "./Sidebar";
import Grid from "@mui/material/Grid2";

const Layout = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        bgcolor: "background.default",
        minHeight: "100vh",
      }}
    >
      <Grid
        sx={{
          display: { xs: "none", sm: "flex" },
          width: "10vw",
          minWidth: "50px",
          maxWidth: "250px",
          minHeight: "100vh",
        }}
        size={{ sm: 1, md: 3 }}
      >
        <Sidebar />
      </Grid>
      <Grid
        sx={{
          width: "60%",
          minHeight: "calc(100vh - 10vh)",
          flexGrow: 1,
        }}
      >
        <Navbar />
        <Outlet />
      </Grid>
    </Grid>
  );
};
export default Layout;
