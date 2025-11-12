import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages";
import Portfolio from "./pages/portfolio";
import NotFound from "./pages/not-found";
import WebDevelopment from "./components/services/webDevelopment";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio/:slug" element={<Portfolio />} />
          <Route path="/services/web-development" element={<WebDevelopment />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
