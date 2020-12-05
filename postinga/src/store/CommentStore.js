import {createStore} from "redux";
import CommentReducer from "../reducers/CommentReducer";

const commentStore = createStore(CommentReducer)

export default commentStore