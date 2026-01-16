import React from "react";
import { FiEdit, FiEye } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const templates = [
  { id: 1, name: "Template 1" },
  { id: 2, name: "Template 2" },
  { id: 3, name: "Template 3" },
  { id: 4, name: "Template 4" },
  { id: 5, name: "Template 5" },
];

const TemplateList = () => {
  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/excel/${id}`); // Route ke halaman edit
  };

  const handleView = (id) => {
    navigate(`/excel-view/${id}`); // Route ke halaman view-only
  };

  return (
    <div className="min-h-screen bg-gray-300 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-5xl">
        <div className="bg-green-700 text-white text-center py-4 rounded-t-lg">
          <h1 className="text-2xl font-bold">Daftar Template</h1>
        </div>

        <table className="w-full table-auto border-collapse">
          <thead className="bg-gray-200 text-black">
            <tr>
              <th className="py-3 border-b border-r border-black text-left px-4" style={{ width: "50px" }}>
                No
              </th>
              <th className="py-3 border-b border-r border-black text-left px-4">Nama Template</th>
              <th className="py-3 border-b border-r border-black text-center">Edit</th>
              <th className="py-3 border-b border-black text-center">View</th>
            </tr>
          </thead>
          <tbody>
            {templates.map((template, index) => (
              <tr key={template.id} className="hover:bg-gray-50">
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
      </div>
    </div>
  );
};

export default TemplateList;
