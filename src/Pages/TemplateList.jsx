import React, { useState } from "react";
import { FiEdit, FiEye } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const templates = [
  { id: 1, name: "Perkerasan Beton D30" },
  { id: 2, name: "Perkerasan Aspal A20", data: ["Item A", "Item B", "Item C"] },
  { id: 3, name: "Percobaan Bangunan D40" },
  { id: 4, name: "Data Pecobaan" },
];

const TemplateList = () => {
  const navigate = useNavigate();
  const [selectedTemplateData, setSelectedTemplateData] = useState([]);

  const handleEdit = (id) => {
    navigate(`/excel/${id}`);
  };

  const handleView = (id) => {
    const template = templates.find((template) => template.id === id);
    if (template && template.data) {
      setSelectedTemplateData(template.data);
    }
    navigate(`/excel-view/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-300 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-5xl">
        <div className="bg-[#089613] text-white text-center py-4 rounded-t-lg">
          <h1 className="text-left px-2 text-2xl font-bold">Analisa</h1>
        </div>

        <table className="w-full table-auto border-collapse">
          <thead className="bg-gray-300 text-black">
            <tr>
              <th className="py-3 border-b border-r border-black text-left px-4" style={{ width: "50px" }}>
                No
              </th>
              <th className="py-3 border-b border-r border-black text-left px-4">List Analisa</th>
              <th className="py-3 border-b border-r border-black text-center">Edit</th>
              <th className="py-3 border-b border-black text-center">View</th>
            </tr>
          </thead>
          <tbody>
            {templates.map((template, index) => (
              <tr key={template.id} className="hover:bg-gray-100">
                <td className="py-3 px-4 text-gray-700 border-b border-r border-black text-center">{index + 1}</td>
                <td className="py-3 px-4 text-left text-gray-700 border-b font-medium border-r border-black">{template.name}</td>
                <td className="py-3 text-center border-b border-r border-black">
                  <button className="text-green-500 hover:text-green-800" onClick={() => handleEdit(template.id)}>
                    <FiEdit size={20} />
                  </button>
                </td>
                <td className="py-3 text-center border-b border-black">
                  <button className="text-green-500 hover:text-green-800" onClick={() => handleView(template.id)}>
                    <FiEye size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {selectedTemplateData.length > 0 && (
          <div className="mt-4 p-4 border border-gray-300 rounded-lg">
            <h2 className="font-bold text-lg">Data Dummy:</h2>
            <ul className="list-disc pl-5">
              {selectedTemplateData.map((item, index) => (
                <li key={index} className="text-gray-700">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default TemplateList;
