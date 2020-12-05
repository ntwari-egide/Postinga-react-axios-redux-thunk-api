import axios from "axios"
import * as commentActionType from "../actions/CommentActionType"
import commentStore from "../store/CommentStore";

export  const get_comment_by_oid = async (id) => {
    await  axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        .then(response => {
            commentStore.dispatch(setCommentAction(response.data))
            console.log("data found ;",response.data)
        })
}

export  const setCommentAction = (comments) => {
    return {
        type: commentActionType.GET_COMMENT_BY_ID,
        payload: comments
    }
}