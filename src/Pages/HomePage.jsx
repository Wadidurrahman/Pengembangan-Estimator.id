import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    const savedTemplates = JSON.parse(localStorage.getItem("templates")) || [];
    setTemplates(savedTemplates);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Daftar Template</h1>
      <ul>
        {templates.map((template) => (
          <li key={template.id} className="mb-2">
            <Link to={`/template/${template.id}`} className="text-blue-500 hover:underline">
              {template.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
