import React, { useState, useContext } from "react";
import "../css/login.css";
import { useNavigate } from "react-router-dom";
import { checkLoginFromData } from "../DataManage/userData";
import UserContext from "../context/UserContext";
import { toast } from "react-toastify";

//this componet is for login 
function LoginComponent() {
    const { currentUser,setCurrentUser, logout } = useContext(UserContext);
    const navigate = useNavigate();
    const [inputDetail, setInputDetail] = useState("");
    const [message, setMessage] = useState("");

    //handler the Log in
    const checkLogin = async (event) => {
        event.preventDefault();
        //check the vaildation
        const checkPromise = await checkLoginFromData(inputDetail);
        const check = checkPromise;
        console.log(check);
        if (check !== false) {
            setCurrentUser(check);
            toast.dismiss();
            toast.success("You are sucessfull Log In!", {
                position: toast.POSITION.BOTTOM_CENTER,
            });
            navigate("/");
            return;
        }
        //give the wrong detail for dispaly
        setInputDetail(inputDetail);
        setMessage("UserName is not correctly");
    };

    //handle the input for onchnage
    const handerInput = (event) => {
        const valueFromHTML = event.target.value;
        setInputDetail(valueFromHTML);
    };

    return (
        <main role="main" className="min-vh-100 backgroundColourLogin ">
            <div className="container moveTheLogIn">
                <div className="row">
                    <div className="col-sm-4"></div>
                    <div className="col-sm-4 shadow p-5 submit border border-2 reduceRadius">
                        <form onSubmit={checkLogin} className="mb-4">
                            <div className="row mb-1 character">
                                <div className="col-sm-4 mx-auto signinTitle">
                                    <h4>Log In</h4>
                                </div>
                            </div>
                            <div className="row mb-2 mx-auto">
                                <div className="col-sm-1"></div>
                                <div className="col-sm-10 movesmallmessage">
                                    <p className="smallmessage">
                                        Not yet Login? Enter your name here.
                                    </p>
                                </div>
                                <div className="col-sm-1"></div>
                            </div>
                            <div className="mb-4">
                                <label className="col-form-label movelabel character">
                                    UserName
                                </label>
                                <div className="mx-5">
                                    <input
                                        type="text"
                                        name="name"
                                        className="form-control"
                                        id="inputPassword3"
                                        value={inputDetail}
                                        onChange={handerInput}
                                    />
                                </div>
                            </div>
                            {message !== null && (
                                <div className="row mb-4">
                                    <div className="col-sm-1"></div>
                                    <div className="col-sm-10">
                                        <p className="message rounded text-center" role="alert">
                                            {message}
                                        </p>
                                    </div>
                                    <div className="col-sm-1"></div>
                                </div>
                            )}
                            <div className="row">
                                <div className="col-sm-1"></div>
                                <div className="row col-sm-10  mx-auto">
                                    <button
                                        type="submit"
                                        className="btn btn-primary shadow rounded"
                                        value="login"
                                        id="signIn"
                                    >
                                        Sign in
                                    </button>
                                </div>
                                <div className="col-sm-1"></div>
                            </div>
                        </form>
                    </div>
                    <div className="col-sm-4"></div>
                </div>
            </div>
        </main>
    );
}

export default LoginComponent;
