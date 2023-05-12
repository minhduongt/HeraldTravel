import { ChakraProvider } from "@chakra-ui/react";
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import theme from "./theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback="loading">
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </Suspense>
  </React.StrictMode>
);
