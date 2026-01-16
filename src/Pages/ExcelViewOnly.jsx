import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import jspreadsheet from "jspreadsheet-ce";
import * as XLSX from "xlsx";
import { FiDownload, FiXCircle } from "react-icons/fi";
import "jspreadsheet-ce/dist/jspreadsheet.css";

const ExcelViewComponent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const sheetRef = useRef(null);
  const [spreadsheet, setSpreadsheet] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fungsi untuk memuat template dari localStorage
    const loadTemplate = () => {
      const savedData = JSON.parse(localStorage.getItem(`templateData-${id}`));
      if (savedData && savedData.length) {
        setData(savedData);
      }
    };

    loadTemplate(); // Memuat template saat komponen di-mount

    // Inisialisasi jspreadsheet setelah data diatur
    const instance = jspreadsheet(sheetRef.current, {
      data,
      minDimensions: [data[0]?.length || 10, data.length || 10], // Menyesuaikan dimensi dengan data
      editable: false,
      allowInsertRow: false,
      allowInsertColumn: false,
      allowDeleteRow: false,
      allowDeleteColumn: false,
      columnSorting: false,
      tableOverflow: true,
      tableWidth: "100%",
      tableHeight: "calc(100vh - 120px)",
      columns: Array(data[0]?.length || 10).fill({ width: 120 }),

      // Styling dinamis untuk setiap sel yang ada datanya
      updateTable: (instance, cell, x, y, value) => {
        if (value) {
          cell.style.backgroundColor = "#FFFFFF"; // Background putih untuk sel berisi data
          cell.style.color = "#111827"; // Teks abu tua
          cell.style.border = "1px solid #E5E7EB"; // Border abu muda
        } else {
          cell.style.backgroundColor = ""; // Warna default untuk sel kosong
          cell.style.color = ""; // Warna default teks
          cell.style.border = "1px solid #E5E7EB"; // Border abu muda tetap untuk sel kosong
        }
      },

      onChange: (instance, cell, x, y, value) => {
        const updatedData = instance.getData(); // Ambil data terkini
        localStorage.setItem(`templateData-${id}`, JSON.stringify(updatedData)); // Simpan ke localStorage
      },
    });

    setSpreadsheet(instance);

    return () => {
      if (instance) instance.destroy();
    };
  }, [id]);

  useEffect(() => {
    if (spreadsheet) {
      spreadsheet.setData(data); // Mengupdate spreadsheet dengan data yang baru
    }
  }, [data, spreadsheet]);

  const handleExport = () => {
    const worksheet = XLSX.utils.aoa_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Data View");
    XLSX.writeFile(workbook, `View_Template_${id}.xlsx`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-300">
      <header className="bg-[#089613] shadow p-4 flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">Template View - {id}</h1>
        <div className="bg-white rounded-2xl px-2 py-1 flex items-center">
          <button className="flex items-center justify-center bg-green-100 text-green-700 hover:bg-green-200 duration-300 border-0 rounded-full p-1" onClick={handleExport}>
            <FiDownload size={24} title="Ekspor" />
          </button>
          <div className="border-l-2 border-gray-300 h-8 mx-2" />
          <button className="flex items-center justify-center bg-red-100 text-red-500 hover:bg-red-200 duration-300 border-0 rounded-full p-1" onClick={() => navigate("/")}>
            <FiXCircle size={24} title="Tutup" />
          </button>
        </div>
      </header>

      <main className="flex-1 overflow-auto p-4">
        <div ref={sheetRef} className="border shadow-md w-full h-full overflow-auto"></div>
      </main>
    </div>
  );
};

export default ExcelViewComponent;
