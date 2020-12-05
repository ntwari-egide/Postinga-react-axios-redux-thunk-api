import React,{useEffect} from "react"
import * as userActions from "../../actions/UsersActions/UserActions"
import {get_all_users} from "../../actions/UsersActions/UserActions";
export default function UsersComponent(){

    useEffect(()=>{
        userActions.get_all_users()
    },[])

    return (
        <div>

        </div>
    )
}