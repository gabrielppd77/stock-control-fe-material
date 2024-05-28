import {
  RouterProvider as RouterProviderMain,
  createBrowserRouter,
} from "react-router-dom";

import MainLayout from "../layout/MainLayout";

import Home from "../pages/Home";
import Supplier from "../pages/Supplier";
import Category from "@pages/Category";
import Product from "@pages/Product";
import Group from "@pages/Group";
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
        path: "/category",
        element: <Category />,
      },
      {
        path: "/group",
        element: <Group />,
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
