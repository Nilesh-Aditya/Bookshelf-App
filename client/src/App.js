import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/about";
import Book from "./components/book";
import Dashboard from "./components/dashboard";
import FAQ from "./components/faq";
import Home from "./components/home";
import Login from "./components/login";
import Pricing from "./components/pricing";
import Register from "./components/register";
import './css/App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route exact path = "/" element={<Home />} />   
        <Route exact path = "/dashboard" element={<Dashboard />} />    
        <Route exact path = "/book" element={<Book />} />
        <Route exact path = "/about" element={<About />} />
        <Route exact path = "/forum" element={<FAQ />} />
        <Route exact path = "/login" element={<Login />} />
        <Route exact path = "/registration" element={<Register />} />
        <Route exact path = "/pricing" element={<Pricing />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
