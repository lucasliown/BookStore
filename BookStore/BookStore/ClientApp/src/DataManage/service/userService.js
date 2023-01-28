import axios from "axios";

//check the login user
const login = async (Name) => {
    const promise = await axios.get(`/api/Customer/${Name}`);
    return promise
};

export { login };