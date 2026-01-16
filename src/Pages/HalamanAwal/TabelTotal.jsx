import React, { useState, useEffect } from "react";
import { FiPlus, FiEdit, FiTrash } from "react-icons/fi";
import initialTemplates from "./../../DataDummy/TemplateData";

const TemplateList = ({ updateTotal }) => {
  const [templates, setTemplates] = useState(initialTemplates);

  useEffect(() => {
    const totalHargaSatuan = templates.reduce((sum, template) => {
      return (
        sum +
        template.spesifikasi.reduce((specSum, spec) => {
          return (
            specSum +
            spec.items.reduce((itemSum, item) => {
              return itemSum + item.hargaSatuan * item.koefisien;
            }, 0)
          );
        }, 0)
      );
    }, 0);

    updateTotal(totalHargaSatuan);
  }, [templates, updateTotal]);

  return (
    <div className="px-2 py-1 max-h-[340px] overflow-y-auto">
      <table className="w-full table-auto border-collapse">
        <thead className="bg-[#089613] text-white text-md sticky top-0 z-10">
          <tr>
            <th className="py-2 px-2 border-r border-white text-left">No</th>
            <th className="py-2 px-2 border-r border-white text-left">Urian Kategori</th>
            <th className="py-2 px-2 border-r border-white text-center">Koefisien</th>
            <th className="py-2 px-2 border-r border-white text-center">Satuan</th>
            <th className="py-2 px-2 border-r border-white text-center">Harga Dasar</th>
            <th className="py-2 px-2 border-r border-white text-center">Harga Satuan</th>
            <th className="py-2 px-2 border-r border-white text-center">Aksi</th>
            <th className="py-2 px-2 border-r border-white text-center">Merk</th>
            <th className="py-2 px-2 border-white text-center">Spesifikasi</th>
          </tr>
        </thead>
        <tbody>
          {templates.map((template, index) => (
            <React.Fragment key={template.id}>
              {/* Menghapus kategori 'Bahan' atau 'Alat-Alat' dari perhitungan */}
              <tr className="bg-gray-100 font-semibold">
                <td colSpan="8">{template.name}</td>
                <td className="py-2 px-2 border-b text-center"></td>
              </tr>
              {template.spesifikasi.map((spec) => (
                <React.Fragment key={spec.id}>
                  {spec.items.map((item, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                      <td className="py-2 px-2 border-b text-right">{idx + 1}.</td>
                      <td className="py-2 px-2 border-b text-left">{item.name}</td>
                      <td className="py-2 px-2 border-b text-center">{item.koefisien}</td>
                      <td className="py-2 px-2 border-b text-center">{item.satuan}</td>
                      <td className="py-2 px-2 border-b text-center">Rp {item.hargaDasar.toLocaleString()}</td>
                      <td className="py-2 px-2 border-b text-center">Rp {item.hargaSatuan.toLocaleString()}</td>
                      <td className="py-2 px-2 border-b text-center flex justify-center space-x-2">
                        <button onClick={() => console.log("Edit spesifikasi")}>
                          <FiEdit className="text-blue-500" />
                        </button>
                        <button onClick={() => console.log("Hapus spesifikasi")}>
                          <FiTrash className="text-red-500" />
                        </button>
                      </td>
                      <td className="py-2 px-2 border-b text-center">{item.merk}</td>
                      <td className="py-2 px-2 border-b text-center"></td>
                    </tr>
                  ))}
                  {/* Total Harga Per Spesifikasi */}
                  <tr className="bg-gray-100 font-semibold">
                    <td colSpan="7"></td>
                    <td className="py-2 px-2 text-right">Jumlah Harga:</td>
                    <td className="py-2 px-2 text-right">Rp {spec.items.reduce((sum, item) => sum + item.hargaSatuan * item.koefisien, 0).toLocaleString()}</td>
                  </tr>
                  {/* Jasa 10% */}
                  <tr className="bg-gray-100 font-semibold">
                    <td colSpan="7"></td>
                    <td className="py-2 px-2 text-right">Jasa 10%:</td>
                    <td className="py-2 px-2 text-right">Rp {(spec.items.reduce((sum, item) => sum + item.hargaSatuan * item.koefisien, 0) * 0.1).toLocaleString()}</td>
                  </tr>
                  {/* Total Harga + Jasa */}
                  <tr className="bg-gray-300 font-semibold">
                    <td colSpan="7"></td>
                    <td className="py-2 px-2 text-right">Total Harga:</td>
                    <td className="py-2 px-2 text-right">Rp {(spec.items.reduce((sum, item) => sum + item.hargaSatuan * item.koefisien, 0) * 1.1).toLocaleString()}</td>
                  </tr>
                </React.Fragment>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TemplateList;
