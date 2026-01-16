import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TemplateList from "./Pages/TemplateList";
import ExcelComponent from "./Pages/ExcelComponent";
import ExcelViewComponent from "./Pages/ExcelViewOnly";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TemplateList />} />
        <Route path="/excel/:id" element={<ExcelComponent />} />
        <Route path="/excel-view/:id" element={<ExcelViewComponent />} />
      </Routes>
    </Router>
  );
};

export default App;
