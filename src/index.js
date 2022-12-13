import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider, ColorModeScript, extendTheme } from "@chakra-ui/react";
import { CounterContextProvider } from "./context/CounterContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

root.render(
  <React.Fragment>
    <ChakraProvider>
      {/* <ColorModeScript initialColorMode='light'> */}
        <CounterContextProvider>
          <App />
        </CounterContextProvider>
      {/* </ColorModeScript> */}
    </ChakraProvider>
  </React.Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
