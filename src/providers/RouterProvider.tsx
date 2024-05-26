import {
  RouterProvider as RouterProviderMain,
  createBrowserRouter,
} from "react-router-dom";

import MainLayout from "../layout/MainLayout";

import Home from "../pages/Home";
import Supplier from "../pages/Supplier";
import Category from "@pages/Category";

const routes = createBrowserRouter([
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
        element: <Supplier />,
      },
      {
        path: "/category",
        element: <Category />,
      },
      {
        path: "/product",
        element: <>Produtos</>,
      },
    ],
  },
]);

export default function RouterProvider() {
  return <RouterProviderMain router={routes} />;
}
