import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages";
import Portfolio from "./pages/portfolio";
import PortfolioList from "./pages/portfolio-list";
import About from "./pages/about";
import Team from "./pages/team";
import Contact from "./pages/contact";
import NotFound from "./pages/not-found";
import WebDevelopment from "./components/services/webDevelopment";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<PortfolioList />} />
        <Route path="/portfolio/:slug" element={<Portfolio />} />
        <Route path="/services/web-development" element={<WebDevelopment />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
