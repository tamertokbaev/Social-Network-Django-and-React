import profileReducer from "./profile-reducer";
import {combineReducers, createStore} from "redux";

let reducers = combineReducers({
    profilePage: profileReducer,
});

let store = createStore(reducers);
window.store = store;

export default store;