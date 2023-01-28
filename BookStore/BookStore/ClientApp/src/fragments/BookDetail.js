import React from "react";
import "../css/bookList.css";

//this is single book
function BookDetail(props) {

    return (
        <tr className="BookTableText">
            <th>{props.bookDetail.bookId}</th>
            <th>{props.bookDetail.title}</th>
            <th>{props.bookDetail.quantity}</th>
            <th className="reservationStatusWidth">
            </th>
        </tr>
    );
}

export default BookDetail;
