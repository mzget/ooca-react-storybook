/**
 * Copyright 2017 Ahoo Studio.co.th.
 *
 * This is pure function action for redux app.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as Rx from "rxjs/Rx";
const { ajax } = Rx.Observable;
import { BackendFactory } from "../../BackendFactory";
import * as ServiceProvider from "../../services/ServiceProvider";
import { ChitChatFactory } from "../../ChitChatFactory";
const getStore = () => ChitChatFactory.getInstance().store;
const authReducer = () => ChitChatFactory.getInstance().authStore;
export const STALK_REMOVE_ROOM_ACCESS = "STALK_REMOVE_ROOM_ACCESS";
export const STALK_REMOVE_ROOM_ACCESS_FAILURE = "STALK_REMOVE_ROOM_ACCESS_FAILURE";
export const STALK_REMOVE_ROOM_ACCESS_SUCCESS = "STALK_REMOVE_ROOM_ACCESS_SUCCESS";
export const STALK_REMOVE_ROOM_ACCESS_CANCELLED = "STALK_REMOVE_ROOM_ACCESS_CANCELLED";
export const removeRoomAccess = (room_id) => ({ type: STALK_REMOVE_ROOM_ACCESS, payload: room_id });
const removeRoomAccess_Success = (payload) => ({ type: STALK_REMOVE_ROOM_ACCESS_SUCCESS, payload });
const removeRoomAccess_Cancelled = () => ({ type: STALK_REMOVE_ROOM_ACCESS_CANCELLED });
const removeRoomAccess_Failure = error => ({ type: STALK_REMOVE_ROOM_ACCESS_FAILURE, payload: error });
export const removeRoomAccess_Epic = action$ => (action$.ofType(STALK_REMOVE_ROOM_ACCESS)
    .mergeMap(action => {
    let { _id } = authReducer().user;
    return ServiceProvider.removeLastAccessRoomInfo(_id, action.payload);
}).map(json => {
    console.log("removeRoomAccess_Epic", json.response);
    let result = json.response;
    if (result.success && result.result.length > 0) {
        return removeRoomAccess_Success(result.result);
    }
    else {
        return removeRoomAccess_Failure(result.message);
    }
})
    .do(x => {
    if (x.type === STALK_REMOVE_ROOM_ACCESS_SUCCESS) {
        waitForRemovedRoom(x.payload);
    }
})
    .takeUntil(action$.ofType(STALK_REMOVE_ROOM_ACCESS_CANCELLED))
    .catch(error => Rx.Observable.of(removeRoomAccess_Failure(error.xhr.response))));
const waitForRemovedRoom = (data) => __awaiter(this, void 0, void 0, function* () {
    let id = setInterval(() => {
        let { state } = getStore().getState().chatlogReducer;
        if (state === STALK_REMOVE_ROOM_ACCESS_SUCCESS) {
            BackendFactory.getInstance().dataListener.onAccessRoom(data);
            clearInterval(id);
        }
    }, 100);
});
const UPDATE_LAST_ACCESS_ROOM = "UPDATE_LAST_ACCESS_ROOM";
export const UPDATE_LAST_ACCESS_ROOM_SUCCESS = "UPDATE_LAST_ACCESS_ROOM_SUCCESS";
export const UPDATE_LAST_ACCESS_ROOM_FAILURE = "UPDATE_LAST_ACCESS_ROOM_FAILURE";
const UPDATE_LAST_ACCESS_ROOM_CANCELLED = "UPDATE_LAST_ACCESS_ROOM_CANCELLED";
export const updateLastAccessRoom = (room_id, user_id) => ({ type: UPDATE_LAST_ACCESS_ROOM, payload: ({ room_id, user_id }) });
const updateLastAccessRoomSuccess = (payload) => ({ type: UPDATE_LAST_ACCESS_ROOM_SUCCESS, payload });
const updateLastAccessRoomFailure = (error) => ({ type: UPDATE_LAST_ACCESS_ROOM_FAILURE, payload: error });
export const updateLastAccessRoomCancelled = () => ({ type: UPDATE_LAST_ACCESS_ROOM_CANCELLED });
export const updateLastAccessRoom_Epic = action$ => action$.ofType(UPDATE_LAST_ACCESS_ROOM)
    .mergeMap(action => {
    let { room_id, user_id } = action.payload;
    return ServiceProvider.updateLastAccessRoomInfo(user_id, room_id);
})
    .map(response => {
    console.log("updateLastAccessRoom value", response.xhr.response);
    let results = response.xhr.response.result[0];
    let _tempRoomAccess = results.roomAccess;
    let roomAccess = getStore().getState().chatlogReducer.get("roomAccess");
    let _newRoomAccess = new Array();
    if (Array.isArray(roomAccess)) {
        let _has = roomAccess.some(value => (value.roomId === _tempRoomAccess[0].roomId));
        if (!_has) {
            roomAccess.push(_tempRoomAccess[0]);
            _newRoomAccess = roomAccess.slice();
        }
        else {
            _newRoomAccess = roomAccess.map((value, id) => {
                if (value.roomId === _tempRoomAccess[0].roomId) {
                    value.accessTime = _tempRoomAccess[0].accessTime;
                }
                return value;
            });
        }
    }
    else {
        _newRoomAccess = _tempRoomAccess.slice();
    }
    BackendFactory.getInstance().dataListener.onUpdatedLastAccessTime(_tempRoomAccess[0]);
    return updateLastAccessRoomSuccess(_newRoomAccess);
})
    .do(x => {
    if (x.payload) {
        BackendFactory.getInstance().dataManager.setRoomAccessForUser(x.payload);
    }
})
    .takeUntil(action$.ofType(UPDATE_LAST_ACCESS_ROOM_CANCELLED))
    .catch(error => Rx.Observable.of(updateLastAccessRoomFailure(error.message)));
export const GET_LAST_ACCESS_ROOM = "GET_LAST_ACCESS_ROOM";
export const GET_LAST_ACCESS_ROOM_SUCCESS = "GET_LAST_ACCESS_ROOM_SUCCESS";
export const GET_LAST_ACCESS_ROOM_FAILURE = "GET_LAST_ACCESS_ROOM_FAILURE";
export const getLastAccessRoom = (user_id) => ({ type: GET_LAST_ACCESS_ROOM, payload: { user_id } });
const getLastAccessRoomSuccess = (payload) => ({ type: GET_LAST_ACCESS_ROOM_SUCCESS, payload });
const getLastAccessRoomFailure = (error) => ({ type: GET_LAST_ACCESS_ROOM_FAILURE, payload: error });
export const getLastAccessRoom_Epic = action$ => (action$.ofType(GET_LAST_ACCESS_ROOM)
    .mergeMap(action => {
    let { user_id } = action.payload;
    return ServiceProvider.getLastAccessRoomInfo(user_id)
        .then(response => response.json())
        .then(json => json)
        .catch(err => err);
})
    .map(json => getLastAccessRoomSuccess(json.result))
    .catch(json => Rx.Observable.of(getLastAccessRoomFailure(json.message))));
