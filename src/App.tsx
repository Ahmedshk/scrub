import React from 'react';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Container/Home/Home";
import About from "./Container/About/About";
import Policy from "./Container/Policy/Policy";
import TermsCondition from "./Container/TermsCondition/TermsCondition";
import Career from "./Container/Career/Career"
import Contact from "./Container/ContactUs/ContactUs"
import Testimonials from "./Container/Testimonials/Testimonials";
import Order from "./Container/Order/Order"
import './App.scss';

const App = () => {
    return (
        <React.Fragment>
            <Router>
                <Header />
                <Routes>
                    <Route path={'/'}  element={<Home />} />
                    <Route path={'/about'} element={<About />} />
                    <Route path={'/policy'} element={<Policy />} />
                    <Route path={'/terms-condition'} element={<TermsCondition />} />
                    <Route path={'/careers'} element={<Career />} />
                    <Route path={'/contact'} element={<Contact />} />
                    <Route path={'/testimonials'} element={<Testimonials />} />
                    <Route path={'/order'} element={<Order />} />
                </Routes>
                <Footer />
            </Router>
        </React.Fragment>
    );
};
export default App;