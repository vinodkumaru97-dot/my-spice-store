// lib/products.ts

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number; // in INR
  unit: string; // 250g, 1L, 100 pcs, etc.
  category: "Spices" | "Oils" | "Paper Cups & Plates";
};

export type ProductCategory = {
  id: string;
  name: string;
  items: Product[];
};

export const productCategories: ProductCategory[] = [
  {
    id: "spices",
    name: "Spices",
    items: [
      {
        id: "turmeric-250",
        name: "Turmeric Powder",
        description:
          "High-curcumin turmeric powder, perfect for curries and immunity drinks.",
        price: 120,
        unit: "250g",
        category: "Spices",
      },
      {
        id: "chilli-250",
        name: "Red Chilli Powder",
        description:
          "Bold color and flavor, made from sun-dried chillies.",
        price: 150,
        unit: "250g",
        category: "Spices",
      },
    ],
  },
  {
    id: "oils",
    name: "Oils",
    items: [
      {
        id: "groundnut-1l",
        name: "Cold-Pressed Groundnut Oil",
        description:
          "Unrefined, cold-pressed oil for everyday Indian cooking.",
        price: 260,
        unit: "1L",
        category: "Oils",
      },
      {
        id: "sesame-1l",
        name: "Cold-Pressed Sesame Oil",
        description: "Traditional flavour, ideal for chutneys and pickles.",
        price: 320,
        unit: "1L",
        category: "Oils",
      },
    ],
  },
  {
    id: "paper",
    name: "Paper Cups & Plates",
    items: [
      {
        id: "cups-200ml-100",
        name: "Paper Cups 200 ml (100 pcs)",
        description:
          "Sturdy, leak-resistant cups for tea, coffee and juice.",
        price: 120,
        unit: "100 pcs",
        category: "Paper Cups & Plates",
      },
      {
        id: "plates-10in-50",
        name: "Paper Plates 10 inch (50 pcs)",
        description:
          "Disposable, food-grade plates for parties and catering.",
        price: 150,
        unit: "50 pcs",
        category: "Paper Cups & Plates",
      },
    ],
  },
];
