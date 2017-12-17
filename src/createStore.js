import { combineReducers, createStore } from "redux";
import { stalkReducer, StalkInitState } from "./chat/chitchat/chats/redux/stalkBridge/stalkReducer";
export function getInitialState() {
    const initState = {
        stalkReducer: new StalkInitState(),
    };
    return initState;
}
function todos(state = [], action) {
    switch (action.type) {
        case "ADD_TODO":
            return state;
        case "COMPLETE_TODO":
            return state;
        default:
            return state;
    }
}
const reducer = combineReducers({ todos, stalkReducer }, getInitialState);
export const store = createStore(reducer);
