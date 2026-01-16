import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TemplateList from "./Pages/TemplateList";
import ExcelComponent from "./Pages/ExcelComponent";
import ExcelViewComponent from "./Pages/ExcelViewOnly";
import HomePage from "./Pages/HomePage";
import HalamanAwal from "./Pages/HalamanAwal/HalamanAwal";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HalamanAwal />} />
        <Route path="/template-list" element={<TemplateList />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/excel/:id" element={<ExcelComponent />} />
        <Route path="/excel-view/:id" element={<ExcelViewComponent />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
