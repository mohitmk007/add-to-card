// import React from 'react'

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Card from "./components/Card/Card";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import { createContext, useState } from "react";

export const ContextData = createContext();

const App = () => {
  const [cartValue, setCartValue] = useState(0);
  return (
    <ContextData.Provider value={{ cartValue, setCartValue }}>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/card" element={<Card></Card>} />
          <Route path="/about" element={<About></About>} />
          <Route path="/contact" element={<Contact></Contact>} />
        </Routes>
      </BrowserRouter>
    </ContextData.Provider>
  );
};

export default App;
