/**
 * Copyright 2016 Ahoo Studio.co.th.
 *
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { stalkjs } from "stalk-js";
import { DataManager } from "./DataManager";
import { DataListener } from "./DataListener";
import { PushDataListener } from "./PushDataListener";
// import { ChatsLogComponent } from "./ChatslogComponent";
import { ServerEventListener } from "./ServerEventListener";
import { ChitChatFactory } from "./ChitChatFactory";
const getConfig = () => ChitChatFactory.getInstance().config;
export class BackendFactory {
    static getInstance() {
        return BackendFactory.instance;
    }
    static createInstance() {
        if (!BackendFactory.instance) {
            BackendFactory.instance = new BackendFactory();
        }
        return BackendFactory.instance;
    }
    // chatLogComp: ChatsLogComponent;
    constructor() {
        console.log("BackendFactory:");
        this.pushDataListener = new PushDataListener();
        this.dataManager = new DataManager();
        this.dataListener = new DataListener(this.dataManager);
    }
    getServer() {
        if (this.stalk._isConnected) {
            return this.stalk;
        }
        else {
            console.log("Stalk connection not yet ready.");
            return null;
        }
    }
    stalkInit() {
        return __awaiter(this, void 0, void 0, function* () {
            this.stalk = stalkjs.create(getConfig().Stalk.chat, getConfig().Stalk.port);
            let socket = yield stalkjs.init(this.stalk);
            return socket;
        });
    }
    handshake(uid) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // @ get connector server.
                let msg = {};
                msg.uid = uid;
                msg["x-api-key"] = getConfig().Stalk.apiKey;
                msg["x-api-version"] = getConfig().Stalk.apiVersion;
                msg["x-app-id"] = getConfig().Stalk.appId;
                const connector = yield stalkjs.geteEnter(this.stalk, msg);
                let params = { host: connector.host, port: connector.port, reconnect: false };
                yield stalkjs.handshake(this.stalk, params);
                return yield connector;
            }
            catch (ex) {
                throw new Error("handshake fail: " + ex.message);
            }
        });
    }
    checkIn(user) {
        return __awaiter(this, void 0, void 0, function* () {
            let msg = {};
            msg.user = user;
            msg["x-api-key"] = getConfig().Stalk.apiKey;
            msg["x-api-version"] = getConfig().Stalk.apiVersion;
            msg["x-app-id"] = getConfig().Stalk.appId;
            let result = yield stalkjs.checkIn(this.stalk, msg);
            return result;
        });
    }
    checkOut() {
        return __awaiter(this, void 0, void 0, function* () {
            yield stalkjs.checkOut(this.stalk);
        });
    }
    /**
     * @returns
     *
     * @memberof BackendFactory
     */
    logout() {
        const self = this;
        const promise = new Promise(function exe(resolve, reject) {
            self.checkOut();
            if (!!self.pushDataListener) {
                delete self.pushDataListener;
            }
            if (!!self.dataManager) {
                delete self.dataManager;
            }
            if (!!self.dataListener) {
                delete self.dataListener;
            }
            delete BackendFactory.instance;
            resolve();
        });
        return promise;
    }
    // createChatlogs() {
    //     this.chatLogComp = new ChatsLogComponent();
    //     return this.chatLogComp;
    // }
    getServerListener() {
        if (!this.serverEventsListener) {
            this.serverEventsListener = new ServerEventListener(this.stalk.getSocket());
        }
        return this.serverEventsListener;
    }
    subscriptions() {
        this.serverEventsListener.addServerListener(this.dataListener);
        this.serverEventsListener.addChatListener(this.dataListener);
        this.serverEventsListener.addPushListener(this.pushDataListener);
    }
}
