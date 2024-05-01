import ReactDOM from "react-dom/client";
import AppConfig from "app/AppConfig";
import App from "./app/App";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <AppConfig>
    <App />
  </AppConfig>,
);
