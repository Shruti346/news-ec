import React from "react";
import Navbar from "./Components/Navbar";
import {BrowserRouter as Router ,Routes ,Route } from "react-router-dom";
import Home from "./Pages/Home";
// import Categories from "./Pages/Categories";
import Footer from "./Components/Footer";
import FetchData from "./Components/FetchData";

const App = () => {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/general" element={<FetchData Cat="General"/>} />
      <Route exact path="/buisness" element={<FetchData Cat="Buisness"/>} />
      <Route exact path="/entertainment" element={<FetchData Cat="Entertainment"/>} />
      <Route exact path="/health" element={<FetchData Cat="Health"/>} />
      <Route exact path="/science" element={<FetchData Cat="Science"/>} />
      <Route exact path="/sports" element={<FetchData Cat="Sports"/>} />
      <Route exact path="/technology" element={<FetchData Cat="Technology"/>} />
      
      </Routes>
      <Footer/>
    </Router>
    </>
  );
};

export default App;
