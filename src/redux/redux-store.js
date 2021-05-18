import {combineReducers, createStore} from "redux";
import messengerReducer from "./messengerReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
  messengerPage: messengerReducer,
  profilePage: profileReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
})

let store = createStore(reducers)

export default store