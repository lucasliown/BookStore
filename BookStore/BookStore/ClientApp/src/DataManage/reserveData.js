import { reserveBooks, getReservation } from "./service/reservationService"

//reserve a book
const reserveABook = async(bookid, customerId) => {
    const reserveDetail = {
        BookId: bookid,
        CustomerId: customerId
    }
    return await reserveBooks(reserveDetail);
}

//get customer reservation
const getCustomerReservation = async (CustomerId) => {
    const data = await getReservation(CustomerId);
    return data;
}

export { reserveABook, getCustomerReservation };