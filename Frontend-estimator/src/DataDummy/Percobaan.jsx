const initialTemplates = [
  {
    id: 1,
    name: "Bahan",
    koef1: "",
    satuan: "",
    hargaDasar: "",
    hargaSatuan: "",
    merk: "",
    spesifikasi: [
      {
        id: 1,
        label: "Bahan",
        items: [
          {
            name: "Beton B2",
            koefisien: 1.0,
            satuan: "m³",
            hargaDasar: 80000,
            hargaSatuan: 20000,
            merk: "A1",
          },
          {
            name: "Plastic",
            koefisien: 0.5,
            satuan: "kg",
            hargaDasar: 20000,
            hargaSatuan: 10000,
            merk: "A2",
          },
          {
            name: "Semen",
            koefisien: 1.5,
            satuan: "kg",
            hargaDasar: 50000,
            hargaSatuan: 12000,
            merk: "A3",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Alat-Alat",
    koef1: "",
    satuan: "",
    hargaDasar: "",
    hargaSatuan: "",
    merk: "B",
    spesifikasi: [
      {
        id: 2,
        label: "Alat-alat",
        items: [
          {
            name: "Kontraktor",
            koefisien: 1.2,
            satuan: "unit",
            hargaDasar: 130000,
            hargaSatuan: 50000,
            merk: "B1",
          },
          {
            name: "Pekerja",
            koefisien: 2.0,
            satuan: "orang",
            hargaDasar: 100000,
            hargaSatuan: 40000,
            merk: "B2",
          },
          {
            name: "Alat Beton",
            koefisien: 1.8,
            satuan: "unit",
            hargaDasar: 200000,
            hargaSatuan: 75000,
            merk: "B3",
          },
        ],
      },
    ],
  },
];

export default initialTemplates;
