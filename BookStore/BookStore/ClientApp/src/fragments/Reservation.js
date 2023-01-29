import React from "react";
import "../css/bookList.css";

//this is single reservation
function Reservation(props) {


    return (
        <tr className="bookTableText">
            <th>{props.reservationDetail.reservationId}</th>
            <th>{props.reservationDetail.book.title}</th>
        </tr>
    );
}

export default Reservation;
