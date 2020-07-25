import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer"
import "./App.css";


function App() {
  
  return (

    
    <Router basename={process.env.PUBLIC_URL}>
      
      <Navbar />
      <br />
      <Route exact path="/" component={Home} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/contact" component={Contact} />
      <Footer />

    </Router>
    
  );
};

export default App;
