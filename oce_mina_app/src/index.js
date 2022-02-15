import * as React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import "./index.css";
import App from "./App";

import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AddWordPage from "./AddWordpage/AddWordPage.jsx";

import EditWordPage from "./EditWordPage/EditWordPage";
import WordPage from "./WordPage/WordPage";
import NavBar from"./Navbar/Navbar"




ReactDOM.render(
  <React.StrictMode>
    <main>
      <Router>
        <header className="mb-5">
          <NavBar></NavBar>
         
        </header>

        <Routes>
        
          <Route path="/App" element={<App />} />
        
          <Route path="/AddWordPage" element={<AddWordPage />} />
       
          <Route path="/WordPage/:id" element={<WordPage />} />
          <Route path="/EditWordPage/:id" element={<EditWordPage />} />
        
          
        </Routes>
      </Router>
    </main>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
