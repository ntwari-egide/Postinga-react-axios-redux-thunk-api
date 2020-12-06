import {combineReducers} from "redux";
import CommentReducer from "./CommentReducer";
import UsersReducer from "./UsersReducer";
import PostsReducer from "./PostsReducer";

export default combineReducers({
    CommentReducer,
    UsersReducer,
    PostsReducer
})