// const ADD_POST = 'ADD-POST';
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
// const ADD_MESSAGE = 'ADD-MESSAGE';
// const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

import profileReducer, {addPostAC, AddPostActionType, UpdateNewPostTextActionType} from "./profile-reducer";
import dialogsReducer, {AddMessageActionType, UpdateNewMessageTextActionType} from "./dialogs-reducer";

export type PostsType = {
    id: number
    message: string
    likeCounts: number
    img: string
}
export type DialogsType = {
    id: number
    name: string
    img: string
}
export type MessagesType = {
    id: number
    message: string
}
export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}
export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageText: string
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}
export type StoreType = {
    _state: RootStateType
    _callSubscriber: any
    subscriber: (callback: (state: RootStateType) => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsType) => void
}
export type ActionsType =
    AddPostActionType
    | UpdateNewPostTextActionType
    | AddMessageActionType
    | UpdateNewMessageTextActionType



let store: StoreType = {
    _state: {

        profilePage: {
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
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Viktoria', img: '/img/avatar/avatar1.jpg'},
                {id: 2, name: 'Dmitriy', img: '/img/avatar/avatar2.jpg'},
                {id: 3, name: 'Sasha', img: '/img/avatar/avatar3.jpg'},
                {id: 4, name: 'Nikolay', img: '/img/avatar/avatar4.jpg'},
                {id: 5, name: 'Kris', img: '/img/avatar/avatar5.jpg'}
            ],
            messages: [
                {id: 1, message: 'Привет'},
                {id: 1, message: 'Как ты бро?'},
                {id: 1, message: 'Как ты бро?'},
                {id: 1, message: 'Как ты бро?'},
                {id: 1, message: 'Как ты бро?'},
                {id: 1, message: 'Да все хорошо'}
            ],
            newMessageText: ''
        },
    },
    _callSubscriber() {
        console.log('state changed');
    },
    subscriber(observer: (state: RootStateType) => void) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state;
    },


    dispatch(action: ActionsType) {
            this._state.profilePage = profileReducer(this._state.profilePage, action);
            this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

            this._callSubscriber(this._state);
    }
}

export default store;





