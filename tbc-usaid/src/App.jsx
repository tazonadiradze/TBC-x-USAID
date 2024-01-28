import React from "react";
import "./App.css";
import Header from "./components/header";
import InfoPanel from "../src/components/infoPanel/index";
import CoursesPanel from "../src/components/coursesPanel/index";
import Slider from "../src/components/sliderPanel/index";
import FAQpanel from "../src/components/FAQpanel/index";
import Footer from "../src/components/Footer/index";
export default function App() {
  return (
    <>
      <Header />
      <InfoPanel />
      <CoursesPanel />
      <Slider />
      <FAQpanel />
      <Footer />
    </>
  );
}
