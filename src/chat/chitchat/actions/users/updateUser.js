var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { BackendFactory } from "../../chats/BackendFactory";
import { ChitChatFactory } from "../../chats/ChitChatFactory";
const getConfig = () => ChitChatFactory.getInstance().config;
export function updateUser(user) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const backendFactory = BackendFactory.getInstance();
            const server = backendFactory.getServer();
            const msg = {};
            msg.user = user;
            msg["x-api-key"] = getConfig().Stalk.apiKey;
            msg["x-api-version"] = getConfig().Stalk.apiVersion;
            msg["x-app-id"] = getConfig().Stalk.appId;
            return yield server.getLobby().updateUser(msg);
        }
        catch (ex) {
            return ex.message;
        }
    });
}
