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
    title: "Estoque",
    icon: "inventory",
    link: "/stock",
  },
];

export default menu;
