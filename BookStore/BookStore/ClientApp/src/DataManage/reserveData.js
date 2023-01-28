import { reserveBooks } from "./service/reservationService"


const reserveABook = async(bookid, customerId) => {
    const reserveDetail = {
        BookId: bookid,
        CustomerId: customerId
    }
    return await reserveBooks(reserveDetail);


}


export { reserveABook };