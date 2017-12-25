/**
 * Copyright 2016 Ahoo Studio.co.th.
 *
 * Support by@ nattapon.r@live.com
 */
import { StalkEvents, ChatEvents, PushEvents } from "stalk-js/lib/browser/";
export class ServerEventListener {
    constructor(socket) {
        this.socket = socket;
    }
    addServerListener(obj) {
        this.serverListener = obj;
        let self = this;
        // <!-- AccessRoom Info -->
        self.socket.on(ServerEventListener.ON_ACCESS_ROOMS, (data) => {
            console.log(ServerEventListener.ON_ACCESS_ROOMS, data);
            self.serverListener.onAccessRoom(data);
        });
        self.socket.on(ServerEventListener.ON_ADD_ROOM_ACCESS, (data) => {
            console.log(ServerEventListener.ON_ADD_ROOM_ACCESS, data);
            self.serverListener.onAddRoomAccess(data);
        });
        self.socket.on(ServerEventListener.ON_UPDATED_LASTACCESSTIME, (data) => {
            console.log(ServerEventListener.ON_UPDATED_LASTACCESSTIME, data);
            self.serverListener.onUpdatedLastAccessTime(data);
        });
        // <!-- User -->
        self.socket.on(StalkEvents.ON_USER_LOGIN, data => {
            console.log(StalkEvents.ON_USER_LOGIN);
            self.serverListener.onUserLogin(data);
        });
        self.socket.on(StalkEvents.ON_USER_LOGOUT, data => {
            console.log(StalkEvents.ON_USER_LOGOUT);
            self.serverListener.onUserLogout(data);
        });
    }
    addChatListener(obj) {
        this.chatServerListener = obj;
        let self = this;
        self.socket.on(ChatEvents.ON_CHAT, function (data) {
            console.log(ChatEvents.ON_CHAT, JSON.stringify(data));
            self.chatServerListener.onChat(data);
        });
        self.socket.on(ChatEvents.ON_ADD, (data) => {
            console.log(ChatEvents.ON_ADD, data);
            self.chatServerListener.onRoomJoin(data);
        });
        self.socket.on(ChatEvents.ON_LEAVE, (data) => {
            console.log(ChatEvents.ON_LEAVE, data);
            self.chatServerListener.onLeaveRoom(data);
        });
        self.socket.on(ChatEvents.ON_GET_MESSAGES_READERS, (data) => {
            console.log(ChatEvents.ON_GET_MESSAGES_READERS);
            self.chatServerListener.onGetMessagesReaders(data);
        });
    }
    addRTCListener(obj) {
        this.rtcCallListener = obj;
        let self = this;
        self.socket.on(ServerEventListener.ON_VIDEO_CALL, (data) => {
            console.log(ServerEventListener.ON_VIDEO_CALL, JSON.stringify(data));
            self.rtcCallListener.onVideoCall(data);
        });
        self.socket.on(ServerEventListener.ON_VOICE_CALL, (data) => {
            console.log(ServerEventListener.ON_VOICE_CALL, JSON.stringify(data));
            self.rtcCallListener.onVoiceCall(data);
        });
        self.socket.on(ServerEventListener.ON_HANGUP_CALL, (data) => {
            console.log(ServerEventListener.ON_HANGUP_CALL, JSON.stringify(data));
            self.rtcCallListener.onHangupCall(data);
        });
        self.socket.on(ServerEventListener.ON_THE_LINE_IS_BUSY, (data) => {
            console.log(ServerEventListener.ON_THE_LINE_IS_BUSY, JSON.stringify(data));
            self.rtcCallListener.onTheLineIsBusy(data);
        });
    }
    addPushListener(obj) {
        this.pushServerListener = obj;
        let self = this;
        self.socket.on(PushEvents.ON_PUSH, function (data) {
            self.pushServerListener.onPush(data);
        });
    }
}
ServerEventListener.ON_VIDEO_CALL = "onVideoCall";
ServerEventListener.ON_VOICE_CALL = "onVoiceCall";
ServerEventListener.ON_HANGUP_CALL = "onHangupCall";
ServerEventListener.ON_THE_LINE_IS_BUSY = "onTheLineIsBusy";
// <!-- AccessRoom Info -->
ServerEventListener.ON_ACCESS_ROOMS = "onAccessRooms";
ServerEventListener.ON_ADD_ROOM_ACCESS = "onAddRoomAccess";
ServerEventListener.ON_UPDATED_LASTACCESSTIME = "onUpdatedLastAccessTime";
