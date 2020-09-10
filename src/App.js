import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header";
import MoviesSearch from "./components/MoviesSearch";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <MoviesSearch />
      <Footer />
    </div>
  );
}

export default App;
