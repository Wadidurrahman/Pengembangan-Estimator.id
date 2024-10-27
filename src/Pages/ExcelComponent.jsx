import React, { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "jspreadsheet-ce/dist/jspreadsheet.css";
import jspreadsheet from "jspreadsheet-ce";
import { FiEye, FiSave, FiDownload, FiXCircle } from "react-icons/fi";
import * as XLSX from "xlsx"; // Pastikan untuk mengimpor XLSX

const ExcelComponent = () => {
  const sheetRef = useRef(null);
  const { id } = useParams();
  const navigate = useNavigate(); // Inisialisasi useNavigate
  const fileName = `File User ${id}`;

  // State untuk kontrol popup
  const [showConfirm, setShowConfirm] = useState(false);
  const [actionType, setActionType] = useState(""); // "save" atau "cancel"

  useEffect(() => {
    jspreadsheet(sheetRef.current, {
      data: [[]],
      minDimensions: [10, 5],
      columns: Array(10).fill({ type: "text" }),
      // Tambahkan konfigurasi untuk header
      columnHeader: true, // Menampilkan header kolom
      // Gaya untuk header
      header: {
        title: "Header", // Judul untuk header
        style: {
          background: "#4caf50", // Warna latar belakang hijau
          color: "#ffffff", // Warna teks putih
          fontWeight: "bold",
        },
      },
      onafterchanges: (instance, changes) => {
        // Jika sel tertentu diubah, Anda bisa memeriksa rumus di sini
      },
    });
  }, []);

  // Simpan ke backend
  const handleSave = () => {
    setActionType("save");
    setShowConfirm(true);
  };

  // Ekspor ke Excel
  const handleExport = () => {
    const data = jspreadsheet.getValue(sheetRef.current);
    const worksheet = XLSX.utils.aoa_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    XLSX.writeFile(workbook, `${fileName}.xlsx`);
  };

  // Konfirmasi untuk simpan
  const confirmSave = async () => {
    setShowConfirm(false);
    const data = jspreadsheet.getValue(sheetRef.current);
    console.log("Data yang disimpan:", data); // Kirim data ke backend
    // Simpan file Excel secara otomatis
    handleExport(); // Panggil fungsi untuk mengekspor file
  };

  // Konfirmasi untuk batal
  const confirmCancel = () => {
    setShowConfirm(false);
    console.log("Pembatalan berhasil");
    navigate("/"); // Arahkan ke daftar template dengan rute yang benar
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-3xl">
        <div className="p-6 border-b flex justify-between items-center">
          <h1 className="text-2xl font-bold text-center">{fileName}</h1>
          <div className="flex space-x-4">
            <button className="text-blue-500 hover:text-blue-700" onClick={handleSave} title="Simpan">
              <FiSave size={24} />
            </button>
            <button className="text-green-500 hover:text-green-700" onClick={handleExport} title="Ekspor">
              <FiDownload size={24} />
            </button>
            <button className="text-gray-500 hover:text-gray-700" title="Lihat Hasil Editing">
              <FiEye size={24} />
            </button>
            <button
              className="text-red-500 hover:text-red-700"
              onClick={() => {
                setActionType("cancel");
                setShowConfirm(true);
              }}
              title="Batal"
            >
              <FiXCircle size={24} />
            </button>
          </div>
        </div>
        <div className="p-4">
          <div ref={sheetRef} className="border shadow-md"></div>
        </div>

        {/* Popup Konfirmasi */}
        {showConfirm && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-lg">
              <h2 className="text-lg font-semibold mb-4">{actionType === "save" ? "Konfirmasi Simpan" : "Konfirmasi Batal"}</h2>
              <p>{actionType === "save" ? "Apakah Anda yakin ingin menyimpan perubahan?" : "Apakah Anda yakin ingin membatalkan?"}</p>
              <div className="mt-4 flex justify-end space-x-2">
                <button className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600" onClick={actionType === "save" ? confirmSave : confirmCancel}>
                  Ya
                </button>
                <button className="bg-gray-300 py-1 px-3 rounded hover:bg-gray-400" onClick={() => setShowConfirm(false)}>
                  Tidak
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExcelComponent;
