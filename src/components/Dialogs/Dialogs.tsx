import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogsItem/DialogItem'
import Message from './Message/Message'
import {
    addMessageAC,
    DialogsPageType,
    updateNewMessageTextAC,

} from "../../redux/state"

type PropsType = {
    state: DialogsPageType
    dispatch: (action: any) =>void
}

const Dialogs = (props: PropsType) => {

let dialogsElements = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} img={dialog.img} />);

let messageElements = props.state.messages.map(message => <Message message={message.message} id={message.id} />);



    let addMessage = () =>{
        props.dispatch( addMessageAC() );
    }

    let onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) =>{
        let message = e.target.value;
        props.dispatch( updateNewMessageTextAC(message) );
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messageElements}
                <textarea onChange={onMessageChange}  value={props.state.newMessageText} />
                <div>
                <button onClick={addMessage}>Отправить</button>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;