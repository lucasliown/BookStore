import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import NavbarComponent from './fragments/NavbarComponent';
import FooterComponent from './fragments/FooterComponent';
import { ToastContainer, Slide, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./css/App.css";
import HomeComponent from './pages/HomeComponent';
import LoginComponent from './pages/LoginComponent';
import BookListComponent from './pages/BookListComponent';
import MyReservationComponent from './pages/MyReservationComponent';
import UserContext from './context/UserContext';
import { getUserData, logoutFromWbsite } from './DataManage/userData';




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
                    <Route path="/bookList" element={<BookListComponent />} />
                    <Route path="/myReservation" element={<MyReservationComponent />} />
                </Routes>
            </UserContext.Provider>
            <FooterComponent />
            <ToastContainer transition={Slide} />
        </div>

    );
}

export default App;
