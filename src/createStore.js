"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const stalkReducer_1 = require("./chat/chitchat/chats/redux/stalkBridge/stalkReducer");
const UserReducer_1 = require("./chat/chitchat/actions/users/UserReducer");
function getInitialState() {
    const initState = {
        stalkReducer: new stalkReducer_1.StalkInitState(),
        stalkUserReducer: new UserReducer_1.StalkUserState(),
    };
    return initState;
}
exports.getInitialState = getInitialState;
const middlewares = [];
if (process.env.NODE_ENV === `development`) {
    const { logger } = require(`redux-logger`);
    middlewares.push(logger);
}
const reducer = redux_1.combineReducers({ stalkReducer: stalkReducer_1.stalkReducer, stalkUserReducer: UserReducer_1.stalkUserReducer }, getInitialState);
exports.store = redux_1.compose(redux_1.applyMiddleware(...middlewares))(redux_1.createStore)(reducer);
