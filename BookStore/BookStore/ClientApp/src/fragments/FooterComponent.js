import React from "react";
import "../css/footer.css";

//This is the footer component
function FooterComponent() {
    return (
        <footer className="footer bg-light mt-auto py-3">
            <div className="container row mx-auto">
                <div className="col-sm-2"></div>
                <div className="col-sm-7 moveRow">
                    <div className="row">
                        <div className="col-sm colorChange">
                            {/* eslint-disable-next-line */}
                            <a className="linkColor colorChange">About</a>
                        </div>
                        <div className="col-sm">
                            {/* eslint-disable-next-line */}
                            <a className="linkColor colorChange">Help Center</a>
                        </div>
                        <div className="col-sm">
                            {/* eslint-disable-next-line */}
                            <a className="linkColor colorChange">Terms of Service</a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            {/* eslint-disable-next-line */}
                            <a className="linkColor colorChange">Privacy Policy</a>
                        </div>
                        <div className="col-sm">
                            {/* eslint-disable-next-line */}
                            <a className="linkColor colorChange">Cookie Policy</a>
                        </div>
                        <div className="col-sm">
                            {/* eslint-disable-next-line */}
                            <a className="linkColor colorChange">Accessibility</a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            {/* eslint-disable-next-line */}
                            <a className="linkColor colorChange">Ads Info</a>
                        </div>
                        <div className="col-sm">
                            {/* eslint-disable-next-line */}
                            <a className="linkColor colorChange">Setting</a>
                        </div>
                        <div className="col-sm">
                            {/* eslint-disable-next-line */}
                            <a className="linkColor colorChange">Careers</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-2">
                    <img src="baigei.jpg" className="rounded logoSize " alt="..." />
                </div>
            </div>

            <div className="d-flex justify-content-center moveCompany mt-3 mx-1">
                <div>
                    {" "}
                    <p className="text-secondary">®2023  BookStore company™</p>
                </div>
            </div>
        </footer>
    );
}
export default FooterComponent;
