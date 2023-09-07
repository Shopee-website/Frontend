import React from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import MainLayout from "components/layout/MainLayout";
import LoadableComponent from "components/loadable-component";
import RegisterLayout from "components/registerLayout/registerLayout";
import { MyProfile } from "view/pages/profile/myProfile";
import { MyOrder } from "view/pages/profile/myOrder";
import GuestRoute from "./guest-route";
import UserRoute from "./user-route";
import AdminRoute from "./admin-route";
import PublicRoute from "./public-route";

const Profile = LoadableComponent(() => import("view/pages/profile"));
const HomePage = LoadableComponent(()=> import('view/pages/homepage'))
const ProductView = LoadableComponent(()=> import('view/pages/product-view'))
const CategoryView = LoadableComponent(()=> import('view/pages/category-view'))
const FlashSale = LoadableComponent(()=> import('view/pages/flash-sale'))
const Login = LoadableComponent(()=> import('view/pages/login/login.js'))
const Register = LoadableComponent(()=> import('view/pages/register/register.js'))
const Cart = LoadableComponent(()=> import('view/pages/cart/cart.js'))
const Admin= LoadableComponent(()=> import('view/pages/admin/admin.js'))
const Payment = LoadableComponent(()=> import('view/pages/payment'));

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/homepage"} />} />

      <Route element={<PublicRoute />}>
        <Route path="/homepage" element={<MainLayout component={HomePage} />} />
        <Route
          path="/login/"
          element={
            <RegisterLayout>
              <Login />
            </RegisterLayout>
          }
        />
        <Route
          path="/register/"
          element={
            <RegisterLayout>
              <Register />
            </RegisterLayout>
          }
        />
      </Route>

      <Route element={<GuestRoute />}>
        <Route
          path="/login/"
          element={
            <RegisterLayout>
              <Login />
            </RegisterLayout>
          }
        />
        <Route
          path="/register/"
          element={
            <RegisterLayout>
              <Register />
            </RegisterLayout>
          }
        />
      </Route>

      <Route element={<UserRoute />}>
        <Route
          path="/product-view/:name/:productId"
          element={<ProductView />}
        />
        <Route
          path="/category-view/:name/:categoryId"
          element={<MainLayout component={CategoryView} />}
        />
        <Route
          path="/flash-sale/"
          element={<MainLayout component={FlashSale} />}
        />
        <Route path="/cart/" element={<Cart />} />
        <Route path="/profile" element={<MainLayout component={Profile} />}>
          <Route path="/profile" element={<MyProfile />} />
          <Route path="/profile/my-profile" element={<MyProfile />} />
          <Route path="/profile/my-order" element={<MyOrder />} />
        </Route>
        <Route path="/payment/" element={<Payment />} />
      </Route>

      <Route element={<AdminRoute />}>
        <Route path="/admin/" element={<Admin />} />
      </Route>
    </Routes>
  );
}

export default AllRoutes;
