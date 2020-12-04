import React from 'react';
import s from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import {DialogsPageType} from "../../../redux/store";

type PropsType = {
    id: string,
    img: string,
    name: string
}

const DialogItem = (props: PropsType) => {

    let path = "/Dialogs/" + props.id;
    return (
        <div className={s.dialog} >
            
            <NavLink to={path} activeClassName={s.active}><img src={props.img} alt=""/>{props.name}</NavLink>
        </div >
    )
}

export default DialogItem;