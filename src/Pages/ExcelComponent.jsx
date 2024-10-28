import React, { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "jspreadsheet-ce/dist/jspreadsheet.css";
import jspreadsheet from "jspreadsheet-ce";
import { FiEye, FiSave, FiDownload, FiXCircle } from "react-icons/fi";
import * as XLSX from "xlsx";

const ExcelComponent = () => {
  const sheetRef = useRef(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const fileName = `Template User ${id}`;

  const [spreadsheet, setSpreadsheet] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);
  const [actionType, setActionType] = useState("");

  useEffect(() => {
    const instance = jspreadsheet(sheetRef.current, {
      data: Array(20).fill(Array(26).fill("")),
      minDimensions: [26, 20],
      editable: true,
      allowInsertRow: true,
      allowInsertColumn: true,
      allowDeleteRow: true,
      allowDeleteColumn: true,
      contextMenu: true,
      parseFormulas: true,
      tableOverflow: true,
      tableWidth: "100%",
      tableHeight: "calc(100vh - 120px)",
      columnSorting: false,
      columns: Array(26).fill({ width: 120 }),
      onafterchanges: (instance, changes) => {
        console.log("Perubahan data:", changes);
      },
    });

    setSpreadsheet(instance);

    return () => {
      if (instance) instance.destroy();
    };
  }, []);

  const handleSave = () => {
    const data = spreadsheet.getData();
    console.log("Data tersimpan:", data);

    // Simpan template sebagai duplikat
    const duplicatedTemplate = {
      id: Date.now(), // Buat ID unik baru untuk duplikat
      name: `${fileName} - Duplikat`,
      data,
    };

    // Arahkan ke halaman list template dengan data duplikat
    navigate("/", { state: { template: duplicatedTemplate } });
  };

  const handleExport = () => {
    window.open("http://localhost:8080/export-excel");

    const data = spreadsheet.getData();
    const worksheet = XLSX.utils.aoa_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    XLSX.writeFile(workbook, `${fileName}.xlsx`);
  };

  const confirmAction = (type) => {
    setActionType(type);
    setShowConfirm(true);
  };

  const confirmSave = () => {
    setShowConfirm(false);
    handleSave();
  };

  const confirmCancel = () => {
    setShowConfirm(false);
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-green-700 shadow p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">{fileName}</h1>
        <div className="flex space-x-4">
          <button className="text-white hover:text-green-800 duration-300" onClick={() => confirmAction("save")}>
            <FiSave size={24} title="Simpan" />
          </button>
          <button className="text-white hover:text-green-800 duration-300" onClick={handleExport}>
            <FiDownload size={24} title="Ekspor" />
          </button>
          <button className="text-white hover:text-green-800 duration-300" onClick={() => navigate(`/excel-view/:id`)}>
            <FiEye size={24} title="Lihat Hasil" />
          </button>
          <button className="text-red-500 hover:text-red-700" onClick={() => confirmAction("cancel")}>
            <FiXCircle size={24} title="Batal" />
          </button>
        </div>
      </header>

      <main className="flex-1 overflow-auto p-4">
        <div ref={sheetRef} className="border shadow-md w-full h-full overflow-auto"></div>
      </main>

      {showConfirm && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-lg font-semibold mb-4">{actionType === "save" ? "Konfirmasi Simpan" : "Konfirmasi Batal"}</h2>
            <p>{actionType === "save" ? "Apakah Anda yakin ingin menyimpan perubahan?" : "Apakah Anda yakin ingin membatalkan?"}</p>
            <div className="mt-4 flex justify-end space-x-2">
              <button className="bg-green-500 text-white py-1 px-3 rounded hover:bg-green-700" onClick={confirmSave}>
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
  );
};

export default ExcelComponent;
