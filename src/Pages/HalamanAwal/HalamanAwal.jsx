import React, { useState, useEffect } from "react";
import TabelTotal from "./TabelTotal";
import { TbListDetails } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import SearchBar from "./../../assets/Component/SearchBar";

const Data = {
  data1: "Rincian AHS :",
  data2: "Pengukuran dan pemasangan Bouwplank",
  data3: "Harga Satuan",
};

const HalamanAwal = () => {
  const [totalHargaSatuan, setTotalHargaSatuan] = useState(0);
  const [spreadsheetData, setSpreadsheet] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTabelKerjaData = () => {
      const savedData = localStorage.getItem("Tabelkerja");
      if (savedData) {
        setSpreadsheet(JSON.parse(savedData));
      }
    };
    fetchTabelKerjaData();
  }, []);

  const updateTotalHargaSatuan = (total) => {
    setTotalHargaSatuan(total);
  };

  const handleSave = () => {
    const isTemplateAccessed = localStorage.getItem("hasAccessedTemplate");

    if (isTemplateAccessed && spreadsheetData.length > 0) {
      navigate(`/tabel-kerja-edit`);
    } else {
      localStorage.setItem("hasAccessedTemplate", true);
      navigate(`/template-list`);
    }
  };

  return (
    <main>
      <section className="flex-grow bg-white p-4 overflow-hidden">
        <div className="shadow-md  border-2">
          <h4 className="bg-[#089613] p-4 text-sm font-semibold text-white">{Data.data1}</h4>
          <div className="text-center my-2">
            <h1 className="text-lg font-bold">{Data.data3}</h1>
          </div>
          <div className="grid grid-cols-3 gap-4 items-center mb-2">
            <div className="flex px-4">
              <button className="bg-[#089613] text-white hover:bg-green-800 duration-300 rounded-full px-6 py-2" onClick={handleSave}>
                <TbListDetails size={24} />
              </button>
            </div>
            <div className="flex justify-center">
              <div className="text-center font-bold text-xl bg-[#A8FF00] rounded-lg px-6 py-2 shadow-md">
                <p>Rp. {totalHargaSatuan.toLocaleString()}</p>
              </div>
            </div>
            <SearchBar />
          </div>
          <TabelTotal total={totalHargaSatuan} updateTotal={updateTotalHargaSatuan} />
        </div>
      </section>
      <div className="flex justify-center bg-[#ECFBEB] p-2">
        <button className="bg-[#089613] hover:bg-green-800 duration-300 text-2xl text-white font-bold px-6 py-2 rounded-full shadow-lg">Selesai</button>
      </div>
    </main>
  );
};

export default HalamanAwal;
