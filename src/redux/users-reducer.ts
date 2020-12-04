import { ProfilePageType} from "./store";


export type ActionsTypeProfile = ReturnType<typeof addPostAC> | ReturnType<typeof updateNewPostTextAC>
let initialState = {
    posts: [
        {
            id: 1,
            message: 'post 1',
            likeCounts: 4,
            img: 'https://cs16planet.ru/steam-avatars/images/avatar2700.jpg'
        },
        {
            id: 1,
            message: 'post 1',
            likeCounts: 4,
            img: 'https://cs16planet.ru/steam-avatars/images/avatar2700.jpg'
        },
        {
            id: 2,
            message: 'post 2',
            likeCounts: 123,
            img: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg'
        }
    ],
    newPostText: ''
}
const usersReducer = (state: ProfilePageType =initialState, action: ActionsTypeProfile) => {
        switch (action.type) {
            case "ADD_POST":{
                let newPost = {
                    id: 5,
                    message: state.newPostText,
                    likeCounts: 0,
                    img: 'https://cs16planet.ru/steam-avatars/images/avatar2700.jpg'
                };
                state.posts.push(newPost);
                state.newPostText = '';
                return {...state};
            }
            case "UPDATE_NEW_POST_TEXT": {
                state.newPostText = action.newText;
                return {...state}
            }
            default: return {...state}
        }
}

export const addPostAC = () => ({type: 'ADD_POST'}) as const;
export const updateNewPostTextAC = (text: string) => ({
    type: 'UPDATE_NEW_POST_TEXT',
    newText: text
}) as const;

export default usersReducer;