import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import { stalkReducer } from "./chat/chitchat/chats/redux/stalkBridge/stalkReducer";
import { stalkUserReducer } from "./chat/chitchat/actions/users/UserReducer";
/*
export function getInitialState() {
    const initState = {
        stalkReducer: new StalkInitState(),
        stalkUserReducer: new StalkUserState(),
    };
    return initState;
}
*/
const middlewares = [];
if (process.env.NODE_ENV === `development`) {
    const { logger } = require(`redux-logger`);
    middlewares.push(logger);
}
const reducer = combineReducers({ stalkReducer, stalkUserReducer });
export const store = compose(applyMiddleware(...middlewares))(createStore)(reducer);
// export default store;
