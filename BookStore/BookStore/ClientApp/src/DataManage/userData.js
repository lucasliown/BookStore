import { login } from './service/userService'
//get user data in the localstorge
const userkey = "user";

function getUserData() {
    const user = JSON.parse(localStorage.getItem(userkey));
    return user;
}

function logoutFromWbsite() {
    localStorage.removeItem(userkey);
}

//check the login when user login
async function checkLoginFromData(name) {
    const checkUserLoginPromise = await login(name);
    const user = checkUserLoginPromise.data;
    if (user === "") {
        return false;
    }
    let userString = JSON.stringify(user);
    localStorage.setItem(userkey, userString);
    return user;
}


export {
    getUserData,
    logoutFromWbsite,
    checkLoginFromData
};
