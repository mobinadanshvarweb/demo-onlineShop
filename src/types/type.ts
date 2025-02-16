export type NavbarItem = {
  subMenu: [];
};
export type SubMenuItem = {
  slug: string;
  title: string;
};

export type Product = {
  price: number;
  name: string;
  _id: string;
  category: string;
  image: string;
};

export type InputProps = {
  type: string;
  placeHolder: string;
  onchange: (event: React.ChangeEvent<HTMLInputElement>) => void; // اصلاح این قسمت
  classname?: string;
};
