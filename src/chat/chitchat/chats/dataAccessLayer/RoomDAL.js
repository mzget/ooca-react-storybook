"use strict";
/**
 * Copyright 2016 Ahoo Studio.co.th.
 *
 *  RoomDAL.ts
 */
Object.defineProperty(exports, "__esModule", { value: true });
const localForage = require("localforage");
class RoomDAL {
    constructor() {
        this.store = localForage.createInstance({
            name: "rooms"
        });
    }
    save(key, data) {
        return this.store.setItem(key, data);
    }
    get(key) {
        return this.store.getItem(key);
    }
    remove(key) {
        return this.store.removeItem(key);
    }
    clear() {
        return this.store.clear();
    }
    getKeys() {
        return this.store.keys();
    }
}
exports.RoomDAL = RoomDAL;
