/**
 * Copyright 2016 Ahoo Studio.co.th.
 *
 * This is pure function action for redux app.
 */
import { BackendFactory } from "../../BackendFactory";
export function stalkPushInit(onPushHandler) {
    const pushDataListener = BackendFactory.getInstance().pushDataListener;
    pushDataListener.addPushEvents(onPushHandler);
}
