import React from "react";
import "./App.css";
import Header from "./components/header";
import InfoPanel from "../src/components/infoPanel/index";
import CoursesPanel from "../src/components/coursesPanel/index";
export default function App() {
  return (
    <>
      <Header />
      <InfoPanel />
      <CoursesPanel />
    </>
  );
}
