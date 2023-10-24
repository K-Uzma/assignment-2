import "./App.css";
import React, { Suspense, lazy } from "react";
import { ThemeProvider, Typography, createTheme } from "@mui/material";
const RouteIndex = lazy(() => import("./route/index"));
const App = () => {
  const defaultTheme = createTheme();
  return (
    <Suspense fallback={<Typography>Loading...</Typography>} timeout={1000}>
      <ThemeProvider theme={defaultTheme}>
        <RouteIndex />
      </ThemeProvider>
    </Suspense>
  );
};

export default App;
