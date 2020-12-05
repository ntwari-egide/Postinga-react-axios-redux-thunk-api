import * as commentAction from "../actions/CommentActionType"
let initialState = [  {
    PostID: 1,
    Id: 1,
    Name: "to work out how they work",
    Email: "Eliseo@gardner.biz",
    Body: "cheering as if it is indeed a great pleasure to the \ ntempora which needs \ fluid and the like \ nreiciendis for wisdom and denouncing"
}]
export default function CommentReducer(state= initialState,action){
    switch (action.type) {
        case commentAction.GET_COMMENT_BY_ID:
            return action.payload
        default:
            return state
    }
}