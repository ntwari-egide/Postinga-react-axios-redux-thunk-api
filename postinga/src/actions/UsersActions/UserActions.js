import userStore from "../../store/UsersStore";
import * as actions from "./UsersActionTypes"
import axios from  "axios"

const get_all_users = () => {
    const allUsersHandler =  axios.get(`https://jsonplaceholder.typicode.com/users`)
    userStore.dispatch(getAllUsersAction(allUsersHandler.data))
}

const getAllUsersAction = (allUsers) => {
    return {
        type: actions.GET_ALL_USERS,
        payload: allUsers
    }
}