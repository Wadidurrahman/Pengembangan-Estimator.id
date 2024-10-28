import React, { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import jspreadsheet from "jspreadsheet-ce";
import * as XLSX from "xlsx";
import "jspreadsheet-ce/dist/jspreadsheet.css";

const ExcelViewComponent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const sheetRef = useRef(null);

  // Contoh data
  const data = [
    ["Nama", "Usia", "Kota"],
    ["Ali", 25, "Jakarta"],
    ["Budi", 30, "Surabaya"],
    ["Cici", 27, "Bandung"],
  ];

  useEffect(() => {
    if (sheetRef.current) {
      // Inisialisasi jspreadsheet hanya jika belum ada tabel
      const jexcel = jspreadsheet(sheetRef.current, {
        data,
        minDimensions: [26, 100],
        editable: false,
        tableOverflow: true,
        defaultColWidth: 100,
        defaultRowHeight: 30,
        style: {
          A1: "background-color: #f0f0f0; font-weight: bold;",
        },
        columnDrag: false, // Disable drag untuk kolom
        rowDrag: false, // Disable drag untuk baris
      });

      // Kolom/baris tak terpakai berwarna gelap
      sheetRef.current.querySelectorAll(".jexcel_content td").forEach((cell) => {
        if (!cell.textContent) {
          cell.style.backgroundColor = "#e0e0e0";
        }
      });

      // Hapus jspreadsheet saat komponen dibersihkan
      return () => {
        jexcel.destroy(); // Hapus instance untuk mencegah duplikasi
      };
    }
  }, []); // Kosongkan dependensi agar efek hanya dijalankan sekali

  // Fungsi untuk mengekspor data ke Excel
  const handleExport = () => {
    const worksheet = XLSX.utils.aoa_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Data Template");
    XLSX.writeFile(workbook, `template_${id}.xlsx`);
  };

  return (
    <div className="min-h-screen bg-gray-300 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-5xl">
        <div className="flex justify-between items-center bg-green-700 text-white py-4 px-6 rounded-t-lg">
          <h1 className="text-2xl font-bold">Lihat Template</h1>
          <div className="space-x-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleExport}>
              Ekspor ke Excel
            </button>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => navigate("/")}>
              X
            </button>
          </div>
        </div>

        <div ref={sheetRef} className="overflow-auto" style={{ maxHeight: "600px", maxWidth: "100%" }}></div>
      </div>
    </div>
  );
};

export default ExcelViewComponent;
