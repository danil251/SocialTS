import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {RootStateType} from "../../redux/store";
import {ActionsType} from "../../redux/redux-store";
import {followAC, setUsersAc, unFollowAC} from "../../redux/users-reducer";



let mapStateToProps = (state: RootStateType) => {
    return {
        usersPage: state.usersPage.users

    }
}
let mapDispatchStateToProps = (dispatch: (action: ActionsType) => void ) => {
    return {
        follow: (usersId: number) => {
            dispatch(followAC(usersId))
        },
        unFollow: (usersId: number) => {
            dispatch(unFollowAC(usersId))
        },
        setUsersAC: (users: string) => {
            dispatch(setUsersAc(users))
        }
    }
}



const UsersContainer = connect(mapStateToProps, mapDispatchStateToProps)(Users)




export default UsersContainer