import React from 'react';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Container/Home/Home";
import About from "./Container/About/About";
import Policy from "./Container/Policy/Policy";
import TermsCondition from "./Container/TermsCondition/TermsCondition";
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
                    <Route path={'/Terms-condition'} element={<TermsCondition />} />
                </Routes>
                <Footer />
            </Router>
        </React.Fragment>
    );
};
export default App;