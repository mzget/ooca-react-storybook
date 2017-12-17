import { IDictionary, StalkFactory } from "stalk-js";
import { BackendFactory } from "../chitchat/chats/BackendFactory";
import { ChitChatFactory } from "../chitchat/chats/ChitChatFactory";
const getConfig = () => ChitChatFactory.getInstance().config;

export async function pushUser(payload: any) {
    try {
        const backendFactory = BackendFactory.getInstance();
        const server = backendFactory.getServer();

        const msg = {};
        msg.payload = payload;
        msg["x-api-key"] = getConfig().Stalk.apiKey;
        msg["x-api-version"] = getConfig().Stalk.apiVersion;
        msg["x-app-id"] = getConfig().Stalk.appId;

        return await server.getPushApi().push(msg);
    } catch (ex) {
        throw new Error("updateUser fail: " + ex.message);
    }
}
