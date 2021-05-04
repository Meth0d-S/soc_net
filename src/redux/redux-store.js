import {combineReducers, createStore} from "redux";
import messengerReducer from "./messengerReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";

let reducers = combineReducers({
  messengerPage: messengerReducer,
  profilePage: profileReducer,
  sidebar: sidebarReducer
})

let store = createStore(reducers)

export default store