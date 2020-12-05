import axios from "axios"
import * as commentActionType from "../actions/CommentActionType"
import commentStore from "../store/CommentStore";

export  const get_comment_by_oid = async (id) => {
   const comments = await  axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    commentStore.dispatch(setCommentAction(comments))
    console.log("data found ;",comments)
}

export  const setCommentAction = (comments) => {
    return {
        type: commentActionType.GET_COMMENT_BY_ID,
        payload: comments
    }
}