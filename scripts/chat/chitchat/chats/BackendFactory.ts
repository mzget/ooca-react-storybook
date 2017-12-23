/**
 * Copyright 2016 Ahoo Studio.co.th.
 *
 */

import { stalkjs, ServerImp, IDictionary, ServerParam } from "stalk-js";
import { DataManager } from "./DataManager";
import { DataListener } from "./DataListener";
import { PushDataListener } from "./PushDataListener";
// import { ChatsLogComponent } from "./ChatslogComponent";
import { ServerEventListener } from "./ServerEventListener";

import { ChitChatFactory } from "./ChitChatFactory";
const getConfig = () => ChitChatFactory.getInstance().config;

export class BackendFactory {
    private static instance: BackendFactory;
    public static getInstance(): BackendFactory {
        return BackendFactory.instance;
    }
    public static createInstance(): BackendFactory {
        if (!BackendFactory.instance) {
            BackendFactory.instance = new BackendFactory();
        }

        return BackendFactory.instance;
    }

    stalk: ServerImp;
    serverEventsListener: ServerEventListener;
    pushDataListener: PushDataListener;
    dataManager: DataManager;
    dataListener: DataListener;
    // chatLogComp: ChatsLogComponent;

    constructor() {
        console.log("BackendFactory:", stalkjs);

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

    async stalkInit() {
        this.stalk = stalkjs.create(getConfig().Stalk.chat, getConfig().Stalk.port);
        let socket = await stalkjs.init(this.stalk);
        return socket;
    }

    async handshake(uid: string) {
        try {
            // @ get connector server.
            let msg = {} as IDictionary;
            msg.uid = uid;
            msg["x-api-key"] = getConfig().Stalk.apiKey;
            msg["x-api-version"] = getConfig().Stalk.apiVersion;
            msg["x-app-id"] = getConfig().Stalk.appId;
            const connector = await stalkjs.geteEnter(this.stalk, msg);

            let params = { host: connector.host, port: connector.port, reconnect: false } as ServerParam;
            await stalkjs.handshake(this.stalk, params);

            return await connector;
        } catch (ex) {
            throw new Error("handshake fail: " + ex.message);
        }
    }

    async checkIn(user: any) {
        let msg = {} as IDictionary;
        msg.user = user;
        msg["x-api-key"] = getConfig().Stalk.apiKey;
        msg["x-api-version"] = getConfig().Stalk.apiVersion;
        msg["x-app-id"] = getConfig().Stalk.appId;
        let result = await stalkjs.checkIn(this.stalk, msg);
        return result;
    }

    private async checkOut() {
        await stalkjs.checkOut(this.stalk);
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

            if (!!self.pushDataListener) { delete self.pushDataListener; }
            if (!!self.dataManager) { delete self.dataManager; }
            if (!!self.dataListener) { delete self.dataListener; }

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
