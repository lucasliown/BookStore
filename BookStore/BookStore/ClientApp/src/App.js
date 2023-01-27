import React from 'react';
import { Route, Routes } from "react-router-dom";
import NavbarComponent from './fragments/NavbarComponent';
import FooterComponent from './fragments/FooterComponent';
import "./css/App.css";
import HomeComponent from './components/HomeComponent';



function App() {
    return (
        <div className="d-flex flex-column min-vh-100">
            <NavbarComponent />
            <Routes>
                <Route path="/" element={<HomeComponent />}/>
{/*                <Route path="/login" element={<Login />} />*/}
{/*                <Route path="/bookList" element={<BookList/>}/>*/}
            </Routes>
            <FooterComponent />
      </div>
    );
}

export default App;
