import React, { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import jspreadsheet from "jspreadsheet-ce";
import * as XLSX from "xlsx";
import "jspreadsheet-ce/dist/jspreadsheet.css";
import { FiDownload, FiXCircle } from "react-icons/fi";

const ExcelViewComponent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const sheetRef = useRef(null);

  const data = [
    ["Nama", "Usia", "Kota"],
    ["Ali", 25, "Jakarta"],
    ["Budi", 30, "Surabaya"],
    ["Cici", 27, "Bandung"],
  ];

  useEffect(() => {
    if (sheetRef.current) {
      const jexcel = jspreadsheet(sheetRef.current, {
        data,
        minDimensions: [26, 100],
        editable: false,
        tableOverflow: true,
        defaultColWidth: 100,
        defaultRowHeight: 30,
        style: { A1: "background-color: #f0f0f0; font-weight: bold;" },
        columnDrag: false,
        rowDrag: false,
      });

      sheetRef.current.querySelectorAll(".jexcel_content td").forEach((cell) => {
        if (!cell.textContent) {
          cell.style.backgroundColor = "#e0e0e0";
        }
      });

      return () => jexcel.destroy();
    }
  }, []);

  const handleExport = () => {
    window.open("http://localhost:8080/export-excel");

    const worksheet = XLSX.utils.aoa_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Data Template");
    XLSX.writeFile(workbook, `template_${id}.xlsx`);
  };

  return (
    <div className="h-screen bg-gray-300 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg w-full h-full flex flex-col">
        <div className="flex justify-between items-center bg-green-700 text-white py-4 px-6 rounded-t-lg">
          <h1 className="text-2xl font-bold">Template.01</h1>
          <div className="space-x-4">
            <button className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-3 rounded-lg" onClick={handleExport}>
              <FiDownload size={20} title="Ekspor" />
            </button>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-3 rounded-lg" onClick={() => navigate("/")}>
              <FiXCircle size={20} />
            </button>
          </div>
        </div>

        <div ref={sheetRef} className="overflow-auto flex-grow bg-white" style={{ maxWidth: "100%", minHeight: "0" }}></div>
      </div>
    </div>
  );
};

export default ExcelViewComponent;
