import { login } from './service/userService'

const userkey = "user";
//get user data in the localstorge
function getUserData() {
    const user = JSON.parse(localStorage.getItem(userkey));
    return user;
}

//log out function
function logoutFromWbsite() {
    localStorage.removeItem(userkey);
}

//check the user detail when user login
async function checkLoginFromData(name) {
    if (name === null || name === "" || name.trim() === "") {
        return false;
    }
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
