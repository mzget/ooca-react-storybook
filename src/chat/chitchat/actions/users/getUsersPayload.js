var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { createAction } from "redux-actions";
import { BackendFactory } from "../../chats/BackendFactory";
import { chitchatFactory } from "../../../Chitchat";
const getConfig = () => chitchatFactory.config;
const store = () => chitchatFactory.getStore();
export const FETCH_USERS_PAYLOAD = "FETCH_USERS_PAYLOAD";
const fetchUsersPayloadSuccess = createAction(FETCH_USERS_PAYLOAD, payload => payload);
export function getUsersPayload() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const backendFactory = BackendFactory.getInstance();
            const server = backendFactory.getServer();
            const msg = {};
            msg["x-api-key"] = getConfig().Stalk.apiKey;
            msg["x-api-version"] = getConfig().Stalk.apiVersion;
            msg["x-app-id"] = getConfig().Stalk.appId;
            const result = yield server.getLobby().getUsersPayload(msg);
            if (result.code == 200) {
                store().dispatch(fetchUsersPayloadSuccess(result.data.value));
            }
            return result;
        }
        catch (ex) {
            return yield ex;
        }
    });
}
export default getUsersPayload;
