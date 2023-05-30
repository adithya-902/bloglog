import React from "react";
import Navbar from "./components/navbar/Navbar.jsx";
import Home from "./pages/home/Home";
import "./App.css";

const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <Home />
      </div>
    </>
  );
};
export default App;
