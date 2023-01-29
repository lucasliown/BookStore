import axios from "axios";

//get all books
const reserveBooks = async (reserveDetail) => {
    const promise = await axios.post("/api/Reservation", reserveDetail);
    return promise.data
};

//get reservation detail
const getReservation = async (CustomerId) => {
    const promise = await axios.get(`/api/Reservation/${CustomerId}`);
    return promise.data
};

export { reserveBooks, getReservation };