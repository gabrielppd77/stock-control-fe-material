interface MenuProps {
  title: string;
  icon: string;
  link: string;
}

const menu: MenuProps[] = [
  {
    title: "Fornecedores",
    icon: "store",
    link: "/supplier",
  },
  {
    title: "Produtos",
    icon: "shopping_cart",
    link: "/product",
  },
  {
    title: "Estoque",
    icon: "inventory",
    link: "/stock",
  },
];

export default menu;
