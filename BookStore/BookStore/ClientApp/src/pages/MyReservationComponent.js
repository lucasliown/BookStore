import React, { useState, useEffect, useContext } from "react";
import "../css/bookList.css";
import { getCustomerReservation } from '../DataManage/reserveData';
import Reservation from '../fragments/Reservation';
import UserContext from "../context/UserContext";

function MyReservationComponent() {
    const { currentUser } = useContext(UserContext);
    const [displayReservation, setDisplayReservation] = useState([]);

    //call api for get all the books
    useEffect(() => {
        const fetchCustomerReservation = async () => {
            const reservationData = await getCustomerReservation(currentUser.customerId);
            console.log(reservationData);
            setDisplayReservation(reservationData);
        }
        fetchCustomerReservation();
    }, []);

    return (
        <main role="main" className="min-vh-100 backgroundColorBookList">
            <div className="container moveList mb-5">
                <div className="row">
                    <div className="col-sm"></div>
                    <div className="col-sm-8">
                        <div className="card border-0">
                            <div className="card-body tableBackgroundColor p-5 shadow">
                                <h5 className="card-title bookTableTitle border-0">
                                    My Reservation history
                                </h5>
                                <br></br>
                                {displayReservation.length === 0 ?
                                    <div className="d-flex justify-content-center align-items-center mx-5 alertCharacter mt-5 p-5">
                                        <div
                                            className="alert alert-info mb-0 p-5"
                                            role="alert"
                                        >
                                            <div className="material-icons mx-5">notifications</div>
                                            <div className="">No Reservation !</div>
                                        </div>
                                    </div>
                                    :
                                    <table className="table table-sm table-borderless bookTableHeader mb-0">
                                        <thead>
                                            <tr>
                                                <th>Reservation ID</th>
                                                <th>Title</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {displayReservation.map((reservation) => {
                                                return (
                                                    <Reservation key={reservation.reservationId}
                                                        reservationDetail={reservation}
                                                    />
                                                );
                                            })}
                                        </tbody>
                                    </table>
                                }
                            </div>
                        </div>
                    </div>

                    <div className="col-sm"></div>
                </div>
            </div>
        </main>
    );
}

export default MyReservationComponent;
