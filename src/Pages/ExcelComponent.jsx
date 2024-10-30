import React, { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "jspreadsheet-ce/dist/jspreadsheet.css";
import jspreadsheet from "jspreadsheet-ce";
import { FiEye, FiSave, FiDownload, FiXCircle, FiUpload } from "react-icons/fi";
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

    const duplicatedTemplate = {
      id: Date.now(),
      name: `${fileName} - Duplikat`,
      data,
    };

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

  const handleImport = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const binaryStr = e.target.result;
      const workbook = XLSX.read(binaryStr, { type: "binary" });

      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

      spreadsheet.setData(data);
    };
    reader.readAsBinaryString(file);
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
        <h1 className="text-white text-xl font-bold">{fileName}</h1>
        <div className="bg-white rounded-2xl px-2 py-1 flex items-center">
          <button className="flex items-center justify-center bg-green-100 text-green-700 hover:bg-green-200 hover:text-green-800 duration-300 border-0 rounded-full p-1" onClick={() => confirmAction("save")}>
            <FiSave size={24} title="Simpan" />
          </button>
          <div className="border-l-2 border-gray-300 h-8 mx-2" />
          <button className="flex items-center justify-center bg-green-100 text-green-700 hover:bg-green-200 hover:text-green-800 duration-300 border-0 rounded-full p-1" onClick={handleExport}>
            <FiDownload size={24} title="Ekspor" />
          </button>
          <div className="border-l-2 border-gray-300 h-8 mx-2" />
          <button className="flex items-center justify-center bg-green-100 text-green-700 hover:bg-green-200 hover:text-green-800 duration-300 border-0 rounded-full p-1" onClick={() => navigate(`/excel-view/:id`)}>
            <FiEye size={24} title="Lihat Hasil" />
          </button>
          <div className="border-l-2 border-gray-300 h-8 mx-2" />
          <label className="flex items-center justify-center bg-blue-100 text-blue-700 hover:bg-blue-200 hover:text-blue-800 duration-300 border-0 rounded-full p-1 cursor-pointer">
            <FiUpload size={24} title="Import" />
            <input type="file" accept=".xlsx, .xls" className="hidden" onChange={handleImport} />
          </label>
          <div className="border-l-2 border-gray-300 h-8 mx-2" />
          <button className="flex items-center justify-center bg-red-100 text-red-500 hover:bg-red-200 hover:text-red-700 duration-300 border-0 rounded-full p-1" onClick={() => confirmAction("cancel")}>
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
