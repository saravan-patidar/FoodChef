import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import { Provider } from "react-redux";

import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
// import RestaurantsMenu from "./components/RestaurantsMenu";
// import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Help from "./components/Help";
import Error from "./components/Error";
import Login from "./components/Login";
import OrderPlaced from "./components/OrderPlaced";
import Shimmer from "./components/Shimmer";

import appStore from "./utils/appStore";
import Shimmer from "./components/Shimmer";

const AppLayout = () => {
  return (
    <>
      {/* <Provider store={appStore}> */}
      <Header />
      <Outlet />
      <Footer />
      {/* </Provider> */}
    </>
  );
};

const RestaurantsMenu = lazy(() => import("./components/RestaurantsMenu"));
const Cart = lazy(() => import("./components/Cart"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/restaurants/:resId",
        element: (
          <Suspense fallback={<Shimmer />}>
            <RestaurantsMenu />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<h1 className="m-auto">Loading....</h1>}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "/order",
        element: <OrderPlaced />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/help",
        element: <Help />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={appStore}>
    <RouterProvider router={appRouter} />
  </Provider>
);
