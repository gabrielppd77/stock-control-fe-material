import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layout/MainLayout";

import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/supplier",
        element: <>Fornecedores</>,
      },
      {
        path: "/category",
        element: <>Categorias</>,
      },
      {
        path: "/product",
        element: <>Produtos</>,
      },
    ],
  },
]);

export default router;
