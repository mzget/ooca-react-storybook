import { combineEpics } from 'redux-observable';
import { getMyRoomEpic, getPersistendMessage_Epic, getPrivateChatRoom_Epic, createPrivateChatRoomEpic, uploadFileEpic, } from './chitchat/chats/redux/chatroom';
import { getLastAccessRoom_Epic, updateLastAccessRoom_Epic } from './chitchat/chats/redux/chatlogs/';
import { getAdminRoleIds_Epic, getAllChatRoom_Epic, getRecentMessage_Epic, initChatlogs_Epic } from './actions/';
export const rootEpic = combineEpics(getMyRoomEpic, getPersistendMessage_Epic, getPrivateChatRoom_Epic, createPrivateChatRoomEpic, uploadFileEpic, getAdminRoleIds_Epic, getAllChatRoom_Epic, getRecentMessage_Epic, initChatlogs_Epic, getLastAccessRoom_Epic, updateLastAccessRoom_Epic);
