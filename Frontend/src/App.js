import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import SectionsPage from "./pages/SectionsPage";
import SectionPage from "./pages/SectionPage";
import ReadPage from "./pages/ReadBook";
import Sell from "./pages/Sell";
import AdminPanel from "./pages/AdminPanel";
import Bubbles from "./components/Bubble";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import UserBar from "./components/UserBar";
import AdminAddBook from "./pages/AdminAddBook";
import AdminDashboard from "./pages/AdminDashboard";
import AdminSellRequests from "./pages/AdminSellRequests";
import Market from "./pages/Market";

import AdminBuyRequests from "./pages/AdminBuyBook";
import "./styles.css";

function App() {
  return (
    <>
      <Bubbles />
      <img
        src="/images/backgroundImg.jpg"
        alt="Background"
        className="background-image"
      />

      <div className="overlay">
        <Navbar />
        <UserBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/market" element={<Market/>} />
          <Route path="/about" element={<About />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/sectionsPage" element={<SectionsPage />} />
          <Route path="/sections/:genre" element={<SectionPage />} />
          <Route path="/read/:title" element={<ReadPage />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} /> 
          <Route path="/admin" element={<AdminPanel />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="add-book" element={<AdminAddBook />} />
          <Route path="sell-requests" element={<AdminSellRequests />} />
          <Route path="buy-book" element={<AdminBuyRequests />} />

        </Route>

        </Routes>
      </div>
    </>
  );
}

export default App;