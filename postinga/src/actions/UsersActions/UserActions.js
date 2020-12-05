import userStore from "../../store/UsersStore";
import axios from  "axios"

const get_all_users = () => {
    const allUsersHandler =  axios.get(`https://jsonplaceholder.typicode.com/users`)
}