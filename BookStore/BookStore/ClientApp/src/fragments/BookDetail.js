import React from "react";
import "../css/bookList.css";

//this is single book
function BookDetail(props) {

    return (
        <tr className="bookTableText"> 
            <th>{props.bookDetail.title}</th>
            <th>{props.bookDetail.quantity}</th>
            <th className="reservationStatusWidth">
            </th>
        </tr>
    );
}

export default BookDetail;
