import axios from "axios"
import * as commentActionType from "../actions/CommentActionType"
import commentStore from "../store/CommentStore";

export  const get_comment_by_oid = (id) => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        .then(response => {
            commentStore.dispatch(setCommentAction(response))
        })
}

export  const setCommentAction = (comments) => {
    return {
        type: commentActionType.GET_COMMENT_BY_ID,
        payload: comments
    }
}