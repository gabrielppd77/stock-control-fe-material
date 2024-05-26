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
    title: "Categorias",
    icon: "category",
    link: "/category",
  },
  {
    title: "Grupos",
    icon: "groups",
    link: "/group",
  },
  {
    title: "Produtos",
    icon: "inventory",
    link: "/product",
  },
];

export default menu;
