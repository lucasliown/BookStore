import axios from "axios";

//get all books
const getAllBooks = async () => {
    const promise = await axios.get("/api/Book");
    return promise.data
};

export {getAllBooks };