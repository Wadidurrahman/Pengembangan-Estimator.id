import React, { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "jspreadsheet-ce/dist/jspreadsheet.css";
import jspreadsheet from "jspreadsheet-ce";
import { FiEye, FiSave, FiDownload, FiXCircle } from "react-icons/fi";
import * as XLSX from "xlsx";
import DataDummy1 from "./../DataDummy/Datadummy.json";
import DataDummy2 from "./../DataDummy/Datadummy2.json";
import Pecobaan from "./../DataDummy/Percobaan";
import TemplateData from "../DataDummy/TemplateData";

const ExcelComponent = () => {
  const sheetRef = useRef(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const fileName = `Template User ${id}`;

  const [spreadsheet, setSpreadsheet] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);
  const [actionType, setActionType] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem(`templateData-${id}`);
    const initialData = storedData
      ? JSON.parse(storedData)
      : (() => {
          switch (id) {
            case "1":
              return [["No.", "URAIAN", "KODE", "KOEF", "SATUAN", "KETERANGAN"], ["", "", "", "", "", ""], ...DataDummy1.map((item, index) => [index + 1, ...Object.values(item)])];
            case "2":
              return [["No.", "URAIAN", "KODE", "KOEF", "SATUAN", "KETERANGAN"], ["", "", "", "", "", ""], ...DataDummy2.map((item, index) => [index + 1, ...Object.values(item)])];
            case "3":
              return [
                ["No.", "URAIAN KATEGORI", "KOFE", "HARGA DASAR", "HARGA SATUAN", "MERK"],
                ["", "", "", "", "", ""],
                ...TemplateData.map((item, index) => [index + 1, item.name, item.merk, item.koefisien, item.satuan, `${item.hargaDasar} / ${item.hargaSatuan}`]),
              ];
            case "4":
              return [["No.", "URAIAN", "DETAIL", "INFO"], ["", "", "", ""], ...Pecobaan.map((item, index) => [index + 1, ...Object.values(item)])];
            default:
              return [];
          }
        })();

    setData(initialData);
  }, [id]);

  useEffect(() => {
    if (data.length > 0) {
      const instance = jspreadsheet(sheetRef.current, {
        data,
        minDimensions: [26, 20],
        editable: true,
        allowInsertRow: true,
        allowInsertColumn: true,
        allowDeleteRow: true,
        allowDeleteColumn: true,
        parseFormulas: true,
        contextMenu: true,
        tableOverflow: true,
        tableWidth: "100%",
        tableHeight: "calc(100vh - 120px)",
        columns: Array(26).fill({ width: 120 }),
      });

      setSpreadsheet(instance);

      return () => {
        instance.destroy();
      };
    }
  }, [data]);

  useEffect(() => {
    const handleUnload = () => {
      if (spreadsheet) {
        const data = spreadsheet.getData();
        localStorage.setItem(`templateData-${id}`, JSON.stringify(data));
      }
    };
    window.addEventListener("beforeunload", handleUnload);
    return () => {
      window.removeEventListener("beforeunload", handleUnload);
    };
  }, [spreadsheet, id]);

  const handleSave = () => {
    if (!spreadsheet) return;

    const data = spreadsheet.getData();
    localStorage.setItem(`templateData-${id}`, JSON.stringify(data));
    console.log("Data tersimpan:", data);

    const newTemplate = {
      id: Date.now(),
      name: `${fileName} - Duplikat`,
      data,
    };

    const savedTemplates = JSON.parse(localStorage.getItem("templates")) || [];
    localStorage.setItem("templates", JSON.stringify([...savedTemplates, newTemplate]));

    navigate(`/`, { state: { template: newTemplate } });
  };

  const handleExport = () => {
    setActionType("export");
    setShowConfirm(true);
  };

  const confirmExport = () => {
    if (!spreadsheet) return;

    const data = spreadsheet.getData();
    const worksheet = XLSX.utils.aoa_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    XLSX.writeFile(workbook, `${fileName}-${Date.now()}.xlsx`);
    setShowConfirm(false);
  };

  const handleClearData = () => {
    if (spreadsheet) {
      spreadsheet.setData(Array(20).fill(Array(26).fill("")));
    }
  };

  const confirmAction = (type) => {
    setActionType(type);
    setShowConfirm(true);
  };

  const confirmSave = () => {
    setShowConfirm(false);
    handleSave();
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-[#089613] shadow p-4 flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">{fileName}</h1>
        <div className="bg-white rounded-2xl px-2 py-1 flex items-center gap-2">
          <button className="flex items-center justify-center bg-green-100 text-green-700 hover:bg-green-200 duration-300 rounded-full p-1" onClick={() => confirmAction("save")}>
            <FiSave size={24} title="Simpan" />
          </button>
          <button className="flex items-center justify-center bg-green-100 text-green-700 hover:bg-green-200 duration-300 rounded-full p-1" onClick={() => navigate(`/excel-view/${id}`)}>
            <FiEye size={24} title="Lihat Hasil" />
          </button>
          <button className="flex items-center justify-center bg-green-100 text-green-700 hover:bg-green-200 duration-300 rounded-full p-1" onClick={handleExport}>
            <FiDownload size={24} title="Ekspor" />
          </button>
          <button className="flex items-center justify-center bg-red-100 text-red-500 hover:bg-red-200 duration-300 rounded-full p-1" onClick={() => navigate("/")}>
            <FiXCircle size={24} title="Batal" />
          </button>
        </div>
      </header>

      <main className="flex-1 overflow-auto p-4">
        <div ref={sheetRef} className="border shadow-md w-full h-full"></div>
      </main>

      {showConfirm && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-lg font-semibold mb-4">{actionType === "save" ? "Konfirmasi Simpan" : actionType === "export" ? "Konfirmasi Ekspor" : "Konfirmasi Batal"}</h2>
            <p>{actionType === "save" ? "Apakah Anda yakin ingin menyimpan perubahan?" : actionType === "export" ? "Apakah Anda yakin ingin mengekspor data?" : "Apakah Anda yakin ingin membatalkan?"}</p>
            <div className="mt-4 flex justify-end space-x-2">
              <button className="bg-green-500 text-white py-1 px-3 rounded hover:bg-green-700" onClick={actionType === "export" ? confirmExport : confirmSave}>
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
