import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import {
    addPostAC,
    updateNewPostTextAC,
} from "../../../redux/profile-reducer"
import {PostsType} from "../../../redux/store";
import {ActionsType} from "../../../redux/redux-store";

type PropsType = {
    posts: Array<PostsType>
    newPostText: string
    dispatch: (action: ActionsType) =>void
}
function MyPosts (props: PropsType) {


  let postElements = props.posts.map(post => <Post img={post.img} message={post.message} likeCounts={post.likeCounts} />)



  let addPost = () => {
    props.dispatch( addPostAC('') );

  }

  let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      let post = e.currentTarget.value;
      props.dispatch( updateNewPostTextAC(post) );
      console.log(e.currentTarget.value)
  }

  return (
    <div className={s.postsBlok}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange}  value={props.newPostText} />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postElements}
      </div>
    </div >
  )
}
export default MyPosts
