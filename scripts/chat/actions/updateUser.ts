import { IDictionary, StalkFactory } from "stalk-js";
import { BackendFactory } from "../chitchat/chats/BackendFactory";
import { ChitChatFactory } from "../chitchat/chats/ChitChatFactory";
const getConfig = () => ChitChatFactory.getInstance().config;

export async function updateUser(user: any) {
    try {
        const backendFactory = BackendFactory.getInstance();
        const server = backendFactory.getServer();

        const msg = {};
        msg.user = user;
        msg["x-api-key"] = getConfig().Stalk.apiKey;
        msg["x-api-version"] = getConfig().Stalk.apiVersion;
        msg["x-app-id"] = getConfig().Stalk.appId;
        return await server.getLobby().updateUser(msg);
    } catch (ex) {
        throw new Error("updateUser fail: " + ex.message);
    }
}
