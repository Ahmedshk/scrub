import React from 'react';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Container/Home/Home";
import About from "./Container/About/About";
import './App.scss';

const App = () => {
    return (
        <React.Fragment>
            <Router>
                <Header />
                <Routes>
                    <Route path={'/'}  element={<Home />} />
                    <Route path={'/about'} element={<About />} />
                </Routes>
                <Footer />
            </Router>
        </React.Fragment>
    );
};
export default App;