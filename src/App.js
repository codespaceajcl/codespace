import React, { useEffect } from "react";
import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import Home from "./Container/Home/Home";
import About from "./Container/About/About";
import Footer from "./Component/Footer/Footer";
import Industry from "./Container/Industry/Industry";
import MainLayout from "./Layout/MainLayout";
import Financial from "./Container/Industry/Inner/Financial";
import InnerLayout from "./Layout/InnerLayout";
import Insurance from "./Container/Industry/Inner/Insurance";
import Healthcare from "./Container/Industry/Inner/Healthcare";
import RealEstate from "./Container/Industry/Inner/RealEstate";
import Logistics from "./Container/Industry/Inner/Logistics";
import Media from "./Container/Industry/Inner/TelcoMedia";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const App = () => {
  const HomeLayout = (
    <Route path={"/"} element={<MainLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/industries" element={<Industry />} />
    </Route>
  );

  const IndustryLayout = (
    <Route path={"/industries"} element={<InnerLayout />}>
      <Route path="/industries/financial" element={<Financial />} />
      <Route path="/industries/insurance" element={<Insurance />} />
      <Route path="/industries/healthcare" element={<Healthcare />} />
      <Route path="/industries/real-estate" element={<RealEstate />} />
      <Route path="/industries/logistics" element={<Logistics />} />
      <Route path="/industries/media" element={<Media />} />
    </Route>
  );

  return (
    <BrowserRouter basename="/">
      <ScrollToTop />
      <Routes>
        {HomeLayout}
        {IndustryLayout}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default App;
