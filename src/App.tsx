import React from 'react';
import Header from "./Container/Pages/Header/Header";
import Footer from "./Container/Pages/Footer/Footer";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import {customerRoutes, RoutesLink } from "./Container/Customer/Navbar/routes";
import CustomerNavbar from "./Container/Customer/Navbar/Navbar";

import {adminRoutes } from "./Container/Admin/Navbar/routes";
import AdminNavBar from "./Container/Admin/Navbar/Navbar";

import Home from "./Container/Pages/Home/Home";
import About from "./Container/Pages/About/About";
import Policy from "./Container/Pages/Policy/Policy";
import TermsCondition from "./Container/Pages/TermsCondition/TermsCondition";
import Career from "./Container/Pages/Career/Career"
import Contact from "./Container/Pages/ContactUs/Contact"
import Testimonials from "./Container/Pages/Testimonials/Testimonials";
import Order from "./Container/Pages/Orders/Order";
import Register from "./Container/Auth/Register/Register";
import Login from "./Container/Auth/Login/Login";
import ForgetPassword from "./Container/Auth/ForgetPassword/ForgetPassword";
import ResetPassword from "./Container/Auth/ResetPassword/ResetPassword";

import './App.scss';

const App = () => {
    const customerLayout = (
        customerRoutes.map((item: RoutesLink, index) => (
            <Route key={index} path={item.path} element={
                <React.Fragment>
                    <CustomerNavbar />
                        { item.component }
                </React.Fragment>
            } />
        ))
    )
    const adminLayout = (
        adminRoutes.map((item: RoutesLink, index) => (
            <Route key={index} path={item.path} element={
                <React.Fragment>
                    <AdminNavBar />
                    { item.component }
                </React.Fragment>
            } />
        ))
    )

    return (
        <React.Fragment>
            <Router>
                <Routes>
                    {customerLayout}
                    {adminLayout}
                    <Route path={'/'}  element={
                        <React.Fragment>
                            <Header />
                            <Home />
                            <Footer />
                        </React.Fragment>
                    } />
                    <Route path={'/about'} element={
                        <React.Fragment>
                            <Header />
                            <About />
                            <Footer />
                        </React.Fragment>
                    } />
                    <Route path={'/policy'} element={
                        <React.Fragment>
                            <Header />
                            <Policy />
                            <Footer />
                        </React.Fragment>
                    } />
                    <Route path={'/terms-condition'} element={
                        <React.Fragment>
                            <Header />
                            <TermsCondition />
                            <Footer />
                        </React.Fragment>
                    } />
                    <Route path={'/careers'} element={
                        <React.Fragment>
                            <Header />
                            <Career />
                            <Footer />
                        </React.Fragment>
                    } />
                    <Route path={'/contact'} element={
                        <React.Fragment>
                            <Header />
                            <Contact />
                            <Footer />
                        </React.Fragment>
                    } />
                    <Route path={'/testimonials'} element={
                        <React.Fragment>
                            <Header />
                            <Testimonials />
                            <Footer />
                        </React.Fragment>
                    } />
                    <Route path={'/order'} element={
                        <React.Fragment>
                            <Header />
                            <Order />
                            <Footer />
                        </React.Fragment>
                    } />

                    <Route path={'/register'} element={<Register />} />
                    <Route path={'/login'} element={<Login />} />
                    <Route path={'/admin/register'} element={<Register />} />
                    <Route path={'/login'} element={<Login />} />
                    <Route path={'/forget-password'} element={<ForgetPassword />} />
                    <Route path={'/reset-password'} element={<ResetPassword />} />
                </Routes>

            </Router>
        </React.Fragment>
    );
};
export default App;