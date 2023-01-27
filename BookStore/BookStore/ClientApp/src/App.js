import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import NavbarComponent from './fragments/NavbarComponent';
import FooterComponent from './fragments/FooterComponent';
import { ToastContainer, Slide, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./css/App.css";
import HomeComponent from './components/HomeComponent';
import LoginComponent from './components/LoginComponent';
import UserContext from './context/UserContext';
import { getUserData, logoutFromWbsite } from './DataManage/userData'




function App() {
    const [currentUser, setCurrentUser] = useState(getUserData());

    //this call back function is for log out
    const logout = () => {
        logoutFromWbsite();
        setCurrentUser(null);
        toast.dismiss();
    };


    return (
        <div className="d-flex flex-column min-vh-100">
            <UserContext.Provider
                value={{ currentUser, setCurrentUser, logout }}
            >
            <NavbarComponent />
            <Routes>
                <Route path="/" element={<HomeComponent />}/>
                    <Route path="/login" element={<LoginComponent />} />
{/*                <Route path="/bookList" element={<BookList/>}/>*/}
                </Routes>
            </UserContext.Provider>
            <FooterComponent />
            <ToastContainer transition={Slide} />
        </div>

    );
}

export default App;
