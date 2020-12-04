import React, {ChangeEvent} from 'react';
import {addPostAC, updateNewPostTextAC,} from "../../../redux/profile-reducer"
import {ActionsType} from "../../../redux/redux-store";
import MyPosts from "./MyPosts";

type PropsType = {
    newPostText: string
    dispatch: (action: ActionsType) =>void
}
function MyPostsContainer (props: PropsType) {

  let addPost = () => {
    props.dispatch( addPostAC() );

  }

  let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      let post = e.currentTarget.value;
      props.dispatch( updateNewPostTextAC(post) );
  }

  return (<MyPosts posts={d} newPostText={d} dispatch={d}/>)
}
export default MyPostsContainer;
