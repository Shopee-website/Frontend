import React from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import MainLayout from "components/layout/MainLayout";
import LoadableComponent from "components/loadable-component";

const HomePage = LoadableComponent(()=> import('view/pages/homepage'))
const ProductView = LoadableComponent(()=> import('view/pages/product-view'))
const CategoryView = LoadableComponent(()=> import('view/pages/category-view'))
const FlashSale = LoadableComponent(()=> import('view/pages/flash-sale'))
const Login = LoadableComponent(()=> import('view/pages/login/login.js'))
const Register = LoadableComponent(()=> import('view/pages/register/register.js'))
const Cart = LoadableComponent(()=> import('view/pages/cart/cart.js'))
const Admin= LoadableComponent(()=> import('view/pages/admin/admin.js'))
const ProductDetails= LoadableComponent(()=> import('view/pages/product-details/ProductDetails.js'))


function AllRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Navigate to={"/homepage"}/>}/>
            <Route>
                <Route 
                    path="/homepage" 
                    element={<MainLayout component={HomePage} />}/>
                <Route 
                    path="/product-view/:productId" 
                    element={<ProductView />} />
                <Route 
                    path="/category-view/:categoryId" 
                    element={<MainLayout component={CategoryView} />}/>
                <Route 
                    path="/flash-sale/" 
                    element={<MainLayout component={FlashSale} />}/>
                <Route 
                    path="/login/" 
                    element={<Login />}/>
                <Route 
                    path="/register/" 
                    element={<Register />}/>
                <Route 
                    path="/cart/" 
                    element={<Cart />}/>
                <Route 
                    path="/admin/" 
                    element={<Admin />}/>
                <Route 
                    path="/product-details/" 
                    element={<ProductDetails />}/>       

            </Route>
        </Routes>
    )

}

export default AllRoutes;