import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "../css/navbar.css";
import UserContext from "../context/UserContext";
import Dropdown from "react-bootstrap/Dropdown";

//this is the navgation bar
function NavbarComponent() {
    //get current user detail from useContext
    const { currentUser, logout } = useContext(UserContext);

    return (
        <Navbar
            className="backgroundColour shadow-lg bg-opacity-1"
            variant="Success"
            expand="lg"
        >
            <Container>
                <Navbar.Brand className="brand mb-1">BookStore</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav d-flex flex-row-reverse" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {currentUser !== null && (
                            <div className="navWelcome  mx-3 bg-opacity-10">
                                Welcome!{currentUser.name}!
                            </div>
                        )}
                        <Link
                            className="material-icons mx-3 mb-1 accountTagStyle changeIcon"
                            to="/"
                        >
                            home
                        </Link>
                    </Nav>
                    {currentUser === null ? (
                        <Nav className="ms-auto">
                            <Link
                                className="btn btn-light mx-3 mt-2 mb-2 bg-secondary bg-opacity-10"
                                to="/login"
                            >
                                Log in
                            </Link>
                        </Nav>
                    ) : (
                        <Nav className="ms-auto">
                            <Link
                                className="material-icons  mx-3 moveTopIcon mb-2 accountTagStyle changeIcon bg-opacity-10"
                                to="/bookList"
                            >
                                library_books
                            </Link>
                            <Dropdown>
                                <Dropdown.Toggle variant="Link" className="dropdown-toggle">
                                    <div className="material-icons loginUser">account_circle</div>
                                </Dropdown.Toggle>

                                <Dropdown.Menu className="dropdown-menu shadow border border-1 reduceRadiusForNav">
                                    <div className="d-grid gap-2">
                                        <Link
                                            className="btn btn-light border-0 bg-light bg-opacity-10 reduceRadius mb-0 p-2 changColor listCharacterStyle"
                                            to="/myReservation"
                                        >
                                            My Reservation
                                        </Link>

                                        <Link
                                            onClick={logout}
                                            className="btn btn-light border-0 bg-light bg-opacity-10 mb-0 mt-0 p-2 reduceRadius changColor listCharacterStyle"
                                            to="/"
                                        >
                                            <div className="row">
                                                <div className="material-icons col-sm-1 accountTagStyle changeLogoutColour">
                                                    logout
                                                </div>
                                                <div className="col-sm-7 mx-1 ">Log out</div>
                                            </div>
                                        </Link>
                                    </div>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav>
                    )}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;
