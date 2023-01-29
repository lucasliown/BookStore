import React, { useContext} from "react";
import "../css/bookList.css";
import UserContext from "../context/UserContext";

//this is single book
function BookDetail(props) {
    const { currentUser} = useContext(UserContext);

    //pass the parameter into callback function
    const handleReserve = () => {
        props.reserve(props.bookDetail.bookId, currentUser.customerId);
    }


    return (
        <tr className="bookTableText"> 
            <th>{props.bookDetail.title}</th>
            <th>{props.bookDetail.quantity}</th>
            <th className="reservationStatusWidth">
                {props.bookDetail.quantity !== 0 ? (
                    <button
                        type="button"
                        className="btn btn-outline-success"
                        onClick={handleReserve}
                    >
                        Reserve
                    </button>
                ) : (
                    <button
                        type="button"
                            className="btn btn-outline-secondary"
                            disabled
                    >
                        Unavailable
                    </button>
                )}
            </th>
        </tr>
    );
}

export default BookDetail;
