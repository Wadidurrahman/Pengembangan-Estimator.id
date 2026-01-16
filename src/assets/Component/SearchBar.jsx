import React from "react";

const Data = {
  data1: "Cari Data :",
};

const SearchBar = ({ total }) => {
  return (
    <div className="flex items-center max-w-md mx-auto">
      <h2 className="text-gray-400 text-lg mr-2 whitespace-nowrap">{Data.data1}</h2>
      <div className="relative w-full">
        <input type="search" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-green-500 focus:border-gray-300" placeholder="Masukkan kata kunci ..." required />
        <div className="absolute inset-y-0 left-0 flex items-center pl-2">
          <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
