import React from 'react';
import {addMessageAC, updateNewMessageTextAC} from "../../redux/dialogs-reducer"
import Dialogs from "./Dialogs";
import {connect} from "react-redux";




let mapStateToProps = (state: any) => {
    return {
        dialogsPage: state.dialogsPage,
        newMessageText: state.dialogsPage.newMessageText
    }
}
let mapDispatchStateToProps = (dispatch: any) => {
    return {
        updateNewMessageText: (message: string) => {dispatch(updateNewMessageTextAC(message))},
        addMessage: () => {dispatch(addMessageAC())}
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchStateToProps)(Dialogs);

export default DialogsContainer;
