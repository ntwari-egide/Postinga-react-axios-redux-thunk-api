import {createStore} from "redux";
import UsersReducer from "../reducers/UsersReducer";

const userStore = createStore(UsersReducer)

export default userStore