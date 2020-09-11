import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header";
import MoviesSearch from "./components/MoviesSearch";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Header />
      <Router>
        <Route path="/" component={MoviesSearch} exact />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
