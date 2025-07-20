import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Home = () => <div><h1>OhioAgroSpray Home</h1></div>;
const About = () => <div><h1>About Us</h1></div>;
const Products = () => <div><h1>Products</h1></div>;
const Gallery = () => <div><h1>Gallery</h1></div>;
const Contact = () => <div><h1>Contact</h1></div>;

export default function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>{" | "}
        <Link to="/about">About</Link>{" | "}
        <Link to="/products">Products</Link>{" | "}
        <Link to="/gallery">Gallery</Link>{" | "}
        <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
