import { ChitChatFactory } from "../ChitChatFactory";
import { withToken, chitchat_headers } from "../utils/chitchatServiceUtils";
const getConfig = () => ChitChatFactory.getInstance().config;
const authReducer = () => ChitChatFactory.getInstance().authStore;
export const getRoomInfo = (room_id) => {
    return fetch(`${getConfig().api.chatroom}/roomInfo?room_id=${room_id}`, {
        method: "GET",
        headers: withToken(chitchat_headers())(authReducer().chitchat_token)
    });
};
export const getUnreadMessage = (room_id, user_id, lastAccessTime) => {
    return fetch(`${getConfig().api.chatroom}/unreadMessage?room_id=${room_id}&user_id=${user_id}&lastAccessTime=${lastAccessTime}`, {
        method: "GET",
        headers: chitchat_headers()
    });
};
export const getOlderMessagesCount = (room_id, topEdgeMessageTime, queryMessage) => {
    return fetch(`${getConfig().api.chatroom}/olderMessagesCount/?message=${queryMessage}&room_id=${room_id}&topEdgeMessageTime=${topEdgeMessageTime}`, {
        method: "GET",
        headers: chitchat_headers()
    });
};
export const getNewerMessages = (room_id, lastMessageTime) => {
    return fetch(`${getConfig().api.chatroom}/getChatHistory`, {
        body: JSON.stringify({
            room_id: room_id,
            lastMessageTime: lastMessageTime
        }),
        method: "POST",
        headers: chitchat_headers()
    });
};
export const getPrivateChatroom = (ownerId, roommateId) => {
    return fetch(`${getConfig().api.chatroom}`, {
        method: "POST",
        headers: chitchat_headers(),
        body: JSON.stringify({
            ownerId: ownerId,
            roommateId: roommateId
        })
    });
};
