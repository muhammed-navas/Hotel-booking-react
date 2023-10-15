import React from "react";
import HomePage from "./page/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./homeComponent/Navbar";
import Footer from "./homeComponent/Footer";
import ActivitiesPage from "./page/ActivitiesPage";
import ContactPage from "./page/ContactPage";
import RoomPage from "./page/RoomPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/activities" element={<ActivitiesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/rooms" element={<RoomPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
