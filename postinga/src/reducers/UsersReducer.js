import * as actionTypes from "../actions/UsersActions/UsersActionTypes"
const initialState = []

function UsersReducer(state = initialState,action){
    switch (action.type) {
        case actionTypes.GET_ALL_USERS:
            return action.paylaod

        case actionTypes.GET_USER:
            return state.filter(user => user.id === action.payload.id)
    }
}