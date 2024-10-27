import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TemplateList from "./Pages/TemplateList";
import ExcelComponent from "./Pages/ExcelComponent";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TemplateList />} />
        <Route path="/excel/:id" element={<ExcelComponent />} />
      </Routes>
    </Router>
  );
};

export default App;
