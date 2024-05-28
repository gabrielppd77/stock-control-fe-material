import {
  RouterProvider as RouterProviderMain,
  createBrowserRouter,
} from "react-router-dom";

import MainLayout from "../layout/MainLayout";

import Home from "../pages/Home";
import Supplier from "../pages/Supplier";
import Product from "@pages/Product";
import Stock from "@pages/Stock";

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
        path: "/product",
        element: <Product />,
      },
      {
        path: "/stock",
        element: <Stock />,
      },
    ],
  },
]);

export default function RouterProvider() {
  return <RouterProviderMain router={routes} />;
}
