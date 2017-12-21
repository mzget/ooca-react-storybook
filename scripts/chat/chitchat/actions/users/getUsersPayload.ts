import { IDictionary, StalkFactory, ServerImplemented } from "stalk-js";
import { BackendFactory } from "../../chats/BackendFactory";
import { ChitChatFactory } from "../../chats/ChitChatFactory";
const getConfig = () => ChitChatFactory.getInstance().config;

export async function getUsersPayload() {
    try {
        const backendFactory = BackendFactory.getInstance();
        const server = backendFactory.getServer();

        const msg = {} as IDictionary;
        msg["x-api-key"] = getConfig().Stalk.apiKey;
        msg["x-api-version"] = getConfig().Stalk.apiVersion;
        msg["x-app-id"] = getConfig().Stalk.appId;

        return await (server as ServerImplemented).getLobby().getUsersPayload(msg);
    } catch (ex) {
        return await ex;
    }
}
