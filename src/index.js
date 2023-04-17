import { createRoot } from "react-dom/client";
import App from "./App";
import react from "react";
import { ReactDOM } from "react";
import { BrowserRouter } from "react-router-dom";

const MainComponent = () => {
  return (
    <div>
      {" "}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </div>
  );
};

const appElement = document.getElementById("app");
const root = createRoot(appElement);
root.render(<MainComponent />);
