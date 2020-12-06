import {combineReducers} from "redux";
import postsStore from "../store/postsStore";
import userStore from "../store/UsersStore";
import commentStore from "../store/CommentStore";

export default combineReducers({
    postsStore,
    commentStore,
    userStore
})