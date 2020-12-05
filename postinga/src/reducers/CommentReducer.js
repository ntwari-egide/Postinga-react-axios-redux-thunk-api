let initialState = []
export default function CommentReducer(state= initialState,action){
    switch (action.type) {
        case "set_comment":
            return action.payload
        default:
            return state
    }
}