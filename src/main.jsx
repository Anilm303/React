import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { CounterProvider } from "./context/CounterContext";
import App from "./App";
import "./index.css"; // <-- THIS IS CRUCIAL for Tailwind
import { Provider } from "react-redux";
import { store } from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <CounterProvider>
        <App />
      </CounterProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
