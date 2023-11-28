import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Navbar} from './components/Navbar';
import {MainPage} from './components/Main';
import {Footer} from './components/Footer';

class AppRoutes extends PureComponent {

    render() {
        return (
            <Router>
                <Navbar/>
                <Routes>
                    <Route exact path="/" element={<MainPage/>}/>
                </Routes>
                <Footer/>
            </Router>
        )
    }
}

export default AppRoutes