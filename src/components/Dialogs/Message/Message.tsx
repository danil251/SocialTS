import React from 'react';
import s from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

type PropsType = {
    message: string,
    id: string,
}


const Message = (props: PropsType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}



export default Message;