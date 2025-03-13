import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import RootLayout from "../layouts/RootLayout";
import { CgSpinner } from "react-icons/cg";

const Home = lazy(() => import("./Home"));
const Product = lazy(() => import("./Product"));
const Cart = lazy(() => import("./Cart"));
const MyAccount = lazy(() => import("./MyAccount"));

export default function AppRouter() {
  return (
    <Suspense
      fallback={
        <div className="fixed w-full h-screen flex justify-center items-center">
          <CgSpinner className="text-4xl animate-spin" />
          <h1 className="animated-pulse">App is Loading...</h1>
        </div>
      }
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={RootLayout}>
            <Route index Component={Home} />
            <Route path="cart" Component={Cart} />
            <Route path="product" Component={Product} />
            <Route path="myacount" Component={MyAccount} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}
