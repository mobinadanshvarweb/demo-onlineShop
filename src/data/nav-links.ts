const navLinks = [
  { id: 1, name: "خانه", path: "/" },
  {
    id: 2,
    name: "دسته بندی",
    path: "/category",
    subMenu: [
      { id: 1, name: "مردانه", path: "/category/men" },
      { id: 2, name: "زنانه", path: "/category/women" },
      { id: 3, name: "بچه گانه", path: "/category/kid" },
      { id: 4, name: "بدلیجات", path: "/category/accessories" },
      { id: 5, name: "نیم ست", path: "/category/necklaces" },
    ],
  },
  { id: 3, name: "درباره ما", path: "/about" },
  { id: 4, name: "تماس با ما", path: "/contact" },
];

export default navLinks;
