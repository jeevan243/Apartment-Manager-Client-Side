import { combineReducers, createStore } from "redux";
import { userReducer } from "./auth/reducer";
// import { Todoreducer } from "./Todo/reducer";



const rootRducer = combineReducers({
    // todo: Todoreducer,
    userstatus: userReducer
})


export const store = createStore(rootRducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    // console.log("here")