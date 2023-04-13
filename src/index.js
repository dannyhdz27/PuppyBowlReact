import { createRoot } from "react-dom/client";
import App from "./App";
import react from "react";
import { ReactDOM } from "react";
import { BrowserRouter } from "react-router-dom";

const BasicComponentNameHere = () => {
  return (
    <div>
      {" "}
      <p>Hello World!</p>
      <BrowserRouter>
        <App />
        <App />
      </BrowserRouter>
    </div>
  );
};

const appElement = document.getElementById("app");
const root = createRoot(appElement);
root.render(<BasicComponentNameHere />);
