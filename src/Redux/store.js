import { combineReducers, createStore } from "redux";
import { userReducer } from "./auth/reducer";



const rootRducer = combineReducers({
    userstatus: userReducer
})


export const store = createStore(rootRducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
