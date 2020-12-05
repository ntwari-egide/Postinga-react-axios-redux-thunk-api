import React,{useEffect} from "react"
import * as userActions from "../../actions/UsersActions/UserActions"
import {get_all_users} from "../../actions/UsersActions/UserActions";
import userStore from "../../store/UsersStore";
import {useSelector} from "react-redux";
export default function UsersComponent(){

    useEffect(()=>{
        userActions.get_all_users()
    },[])

    // userStore.subscribe(() => {
    //     console.log("Store changed: ",userStore.getState())
    // })

    const allUsersHandler = () => {
       return  userStore.getState()
    }

    const allUsers = useSelector(allUsersHandler)
    console.log("Users : ",allUsers)

    return (
        <div>

        </div>
    )
}