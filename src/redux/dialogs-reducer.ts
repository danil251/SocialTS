import {ActionsType, RootStateType} from "./state";


const dialogsReducer = (state: RootStateType, action: ActionsType) => {
    switch (action.type) {
        case "ADD_MESSAGE": {
            return;
        }
        case "UPDATE_NEW_MESSAGE_TEXT": {
            return;
        }
    }
}