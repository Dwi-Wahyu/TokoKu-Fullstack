// file: lib/dummyDataProduk.ts

export const dummyDataProduk = [
  {
    id: 1,
    name: "Kaos Polo T-Shirt",
    description: "Kaos polo dengan bahan katun premium",
    category: "Pakaian",
    image: "/products/polo.png",
    createdAt: "2023-01-15T10:30:00Z",
    updatedAt: "2023-01-20T08:45:00Z",
    variants: [
      {
        id: 1,
        sku: "POLO-S-M",
        image: "/products/polo.png",
        price: 199000.0,
        cost: 120000.0,
        stock: 50,
        createdAt: "2023-01-15T10:30:00Z",
        updatedAt: "2023-01-20T08:45:00Z",
        optionValues: [
          {
            optionValue: {
              value: "S",
              option: { name: "Ukuran" },
            },
          },
          {
            optionValue: {
              value: "Hitam",
              option: { name: "Warna" },
            },
          },
        ],
      },
      {
        id: 2,
        sku: "POLO-M-M",
        image: "https://example.com/images/polo-tshirt-maroon.jpg",
        price: 199000.0,
        cost: 120000.0,
        stock: 35,
        createdAt: "2023-01-15T10:30:00Z",
        updatedAt: "2023-01-20T08:45:00Z",
        optionValues: [
          {
            optionValue: {
              value: "M",
              option: { name: "Ukuran" },
            },
          },
          {
            optionValue: {
              value: "Marun",
              option: { name: "Warna" },
            },
          },
        ],
      },
    ],
    options: [
      {
        id: 1,
        name: "Ukuran",
        values: [
          { id: 1, value: "S" },
          { id: 2, value: "M" },
          { id: 3, value: "L" },
        ],
      },
      {
        id: 2,
        name: "Warna",
        values: [
          { id: 4, value: "Hitam" },
          { id: 5, value: "Marun" },
          { id: 6, value: "Putih" },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Celana Jeans Slim Fit",
    description: "Celana jeans dengan potongan slim fit",
    category: "Pakaian",
    image: "/products/jeans.png",
    createdAt: "2023-02-10T14:20:00Z",
    updatedAt: "2023-02-15T09:10:00Z",
    variants: [
      {
        id: 3,
        sku: "JEANS-30-B",
        image: "/products/jeans.png",
        price: 450000.0,
        cost: 300000.0,
        stock: 25,
        createdAt: "2023-02-10T14:20:00Z",
        updatedAt: "2023-02-15T09:10:00Z",
        optionValues: [
          {
            optionValue: {
              value: "30",
              option: { name: "Ukuran" },
            },
          },
          {
            optionValue: {
              value: "Biru",
              option: { name: "Warna" },
            },
          },
        ],
      },
      {
        id: 4,
        sku: "JEANS-32-B",
        image: "https://example.com/images/jeans-black.jpg",
        price: 450000.0,
        cost: 300000.0,
        stock: 18,
        createdAt: "2023-02-10T14:20:00Z",
        updatedAt: "2023-02-15T09:10:00Z",
        optionValues: [
          {
            optionValue: {
              value: "32",
              option: { name: "Ukuran" },
            },
          },
          {
            optionValue: {
              value: "Hitam",
              option: { name: "Warna" },
            },
          },
        ],
      },
    ],
    options: [
      {
        id: 3,
        name: "Ukuran",
        values: [
          { id: 7, value: "28" },
          { id: 8, value: "30" },
          { id: 9, value: "32" },
        ],
      },
      {
        id: 4,
        name: "Warna",
        values: [
          { id: 10, value: "Biru" },
          { id: 11, value: "Hitam" },
        ],
      },
    ],
  },
  // Tambahkan produk lainnya sampai total 10
];
