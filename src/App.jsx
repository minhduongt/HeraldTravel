import "./i18n.js";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    const languague = localStorage.getItem("lang");
    if (!languague) localStorage.setItem("lang", "vi");
  });

  return (
    <div className="App">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
