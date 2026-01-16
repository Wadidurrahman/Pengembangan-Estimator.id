import React from "react";

const TabelTotal = ({ total }) => {
  return (
    <div className="p-4">
      <h2 className="text-center font-bold text-lg">Total Harga Satuan</h2>
      <p className="text-center text-xl font-semibold">Rp. {total.toLocaleString()}</p>
    </div>
  );
};

export default TabelTotal;
