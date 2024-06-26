import React from "react";
import ReactDOM from "react-dom/client";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import "./index.css";

import CssBaseline from "@mui/material/CssBaseline";

import QueryClientProvider from "./providers/QueryClientProvider";
import ThemeProvider from "./providers/ThemeProvider";
import RouterProvider from "./providers/RouterProvider";
import ToastProvider from "./providers/ToastProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider>
      <ThemeProvider>
        <ToastProvider>
          <CssBaseline />
          <RouterProvider />
        </ToastProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
