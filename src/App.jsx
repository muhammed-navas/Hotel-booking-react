import React from "react";
import HomePage from "./page/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./homeComponent/Navbar";
import Footer from "./homeComponent/Footer";
import ActivitiesPage from "./page/ActivitiesPage";
import ContactPage from "./page/ContactPage";
import RoomPage from "./page/RoomPage";
import "./App.css";
import Deluxe from "./page/Deluxe";
// import Sample from "./sampleF";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/activities" element={<ActivitiesPage />} />
          <Route path="/rooms" element={<RoomPage />} />
          <Route path="/deluxe" element={<Deluxe />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
        {/* <Sample /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
