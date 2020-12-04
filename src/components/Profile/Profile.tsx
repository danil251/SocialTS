import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ActionsType, ProfilePageType} from "../../redux/state";

type PropsType = {
  state: ProfilePageType
  dispatch: (action: ActionsType) =>void
}

function Profile (props: PropsType) {
  return <div>
    <ProfileInfo />
    <MyPosts posts = {props.state.posts} dispatch={props.dispatch}  newPostText = {props.state.newPostText}/>
    
  </div>
}

export default Profile