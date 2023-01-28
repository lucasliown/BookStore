import axios from "axios";

//get all books
const reserveBooks = async (reserveDetail) => {
    const promise = await axios.post("/api/Reservation", reserveDetail);
    return promise.data
};

export { reserveBooks };