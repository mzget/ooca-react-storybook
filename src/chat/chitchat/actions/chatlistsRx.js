var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/**
 * Copyright 2017 Ahoo Studio.co.th.
 *
 * This is pure function action for redux app.
 */
import { createAction } from "redux-actions";
import * as Rx from "rxjs/Rx";
import { getLastAccessRoom, STALK_INIT_CHATLOG, ON_CHATLOG_CHANGE } from "../chitchat/chats/redux/chatlogs/";
import { ChitChatFactory } from "../chitchat/chats/ChitChatFactory";
import { chitchat_headers } from "../chitchat/chats/utils/chitchatServiceUtils";
import { getUnreadMessage } from "../chitchat/chats/";
import { RoomAccessData } from "../chitchat/shared/";
const { ajax } = Rx.Observable;
const config = () => ChitChatFactory.getInstance().config;
const getAuthStore = () => ChitChatFactory.getInstance().authStore;
const getStore = () => ChitChatFactory.getInstance().store;
// import Store from "../redux/configureStore";
const GET_ALL_CHATROOM = "GET_ALL_CHATROOM";
export const GET_ALL_CHATROOM_SUCCESS = "GET_ALL_CHATROOM_SUCCESS";
export const GET_ALL_CHATROOM_FAILURE = "GET_ALL_CHATROOM_FAILURE";
export const getAllChatRoom = () => {
    return dispatch => {
        dispatch(getAllChatRoomRequest());
        let observable = ajax.get(`${config().api.chatroom}/all`, chitchat_headers());
        observable.subscribe((x) => {
            dispatch(getAllChatRoomSuccess(x.response.result));
        }, error => {
            console.warn("error", error);
            dispatch(getAllChatRoomFailure(error));
        }, () => {
            console.log("done");
        });
    };
};
const getAllChatRoomRequest = createAction(GET_ALL_CHATROOM);
const getAllChatRoomSuccess = createAction(GET_ALL_CHATROOM_SUCCESS, payload => payload);
const getAllChatRoomFailure = createAction(GET_ALL_CHATROOM_FAILURE, error => error);
const GET_RECENT_MESSAGE = "GET_RECENT_MESSAGE";
export const GET_RECENT_MESSAGE_SUCCESS = "GET_RECENT_MESSAGE_SUCCESS";
export const GET_RECENT_MESSAGE_FAILURE = "GET_RECENT_MESSAGE_FAILURE";
const getRecentMessageSuccess = createAction(GET_RECENT_MESSAGE_SUCCESS, payload => payload);
const getRecentMessageFailure = createAction(GET_RECENT_MESSAGE_FAILURE, error => error);
export const getRecentMessage_Epic = action$ => action$.filter(action => action.type === GET_ALL_CHATROOM_SUCCESS || action.type === ON_CHATLOG_CHANGE)
    .mergeMap(action => {
    let chatroomReducer = getStore().getState().chatroomReducer;
    let { roomAccess } = getStore().getState().chatlogReducer;
    let { id } = getAuthStore().user;
    let chatlogs = new Array();
    let rooms = chatroomReducer.get("chatrooms");
    let access = [];
    if (!!roomAccess)
        access = roomAccess.slice();
    rooms.map(item => {
        let has = access.some(acc => (acc.roomId === item._id));
        if (!has) {
            access.push(new RoomAccessData(item._id, item.createTime));
        }
    });
    return Rx.Observable.fromPromise(new Promise((resolve, reject) => {
        Rx.Observable.from(access)
            .map((room) => __awaiter(this, void 0, void 0, function* () {
            let value = yield getUnreadMessage(id, new RoomAccessData(room.roomId, room.accessTime));
            let log = { rid: value.rid, count: value.count, lastMessage: value.message };
            return log;
        }))
            .flatMap(data => { return data; })
            .subscribe(log => {
            chatlogs.push(log);
        }, (err) => {
            reject(err);
        }, () => {
            resolve(chatlogs);
        });
    }));
})
    .map(response => getRecentMessageSuccess(response))
    .catch(error => { console.warn("errrrrrr", error); return Rx.Observable.of(getRecentMessageFailure(error)); });
export const initChatlogs_Epic = action$ => action$.ofType(STALK_INIT_CHATLOG)
    .mergeMap((action) => __awaiter(this, void 0, void 0, function* () {
    let { id } = getAuthStore().user;
    return yield id;
})).map(id => getLastAccessRoom(id));
