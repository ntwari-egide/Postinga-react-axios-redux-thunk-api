import * as actions from "../actions/postActionTypes"

let initialPostState = [
    {
        userId: 2,
        id: 1,
        title: "FIRST nesciunt quas odio ",
        body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
    },
    {
        userId: 2,
        id: 2,
        title: "FIRST nesciunt quas odio ",
        body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
    }
];

export default function postReducer(state = initialPostState,action){
    switch (action.type){
        case actions.GET_ALL_POSTS:
            return state;

        case actions.RESET_POSTS:
            return {
                ...state,
                initialPostState: [...initialPostState,action.payload]
            }


        case actions.GET_POST_BY_ID:
            return state.filter(post => post.id === action.payload.id )

        case actions.CREATE_POST:
            return [
                ...state,
                {
                    userId: action.payload.userId,
                    id: action.payload.id,
                    title: action.payload.title,
                    body: action.payload.body
                }
            ]
        case actions.UPDATE_POST:
            return state.map(posts => {
                if(posts.id === action.payload.id){
                    {
                        return {
                            userId: action.payload.userId,
                            id: action.payload.id,
                            title: action.payload.title,
                            body: action.payload.body
                        }
                    }
                }

                return posts;
            })
        case actions.DELETE_POST:
            return state.filter(post => post.id !== action.payload.id )

        default:
            return state;
    }
}