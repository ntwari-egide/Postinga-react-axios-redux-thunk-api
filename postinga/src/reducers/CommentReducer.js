import * as commentAction from "../actions/CommentActionType"
let initialState = []
export default function CommentReducer(state= initialState,action){
    switch (action.type) {
        case commentAction.GET_COMMENT_BY_ID:
            return action.payload
        default:
            return state
    }
}