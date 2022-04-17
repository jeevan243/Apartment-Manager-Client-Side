import { USER_STATUS } from "./actionType";
//import { store } from "../store";

try {
    var init = JSON.parse(localStorage.getItem("userdata")) || "false";

} catch (er) {
    console.log(er.message)
    init = "false"
}
const initState = {
    status: init
}
export const userReducer = (store = initState, { type, payload }) => {


    switch (type) {
        case USER_STATUS:
            console.log(payload.status)
            localStorage.setItem("userdata", JSON.stringify(payload))
            return {
                ...store, status: payload.status
            }
        default:
            return store;
    }
}

