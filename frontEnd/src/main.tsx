import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import router from "./route/index.tsx";
import store from "./state/store.ts";
import "./index.css";
import "./utils/i18n.ts";
const theme = createTheme({
  palette: {
    primary: { main: "#004a57" },
    secondary: { main: "#1f6d99" },
    background: { default: "#F8FAFB", paper: "#FFFFFF" },
    text: {
      primary: "#333333",
      secondary: "#555555",
    },
  },
});
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
