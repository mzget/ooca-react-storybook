/// <reference path='../../node_modules/immutable/dist/immutable.d.ts'/>
import { Map, Record } from "immutable";

// const FB = window.FB;

export const AnalyticConst = {
    LOG_APPOINTMENT: "appointment",
};
const LogRecord = Record({
    content_id: AnalyticConst.LOG_APPOINTMENT,
    currency: "THB",  // http://en.wikipedia.org/wiki/ISO_4217
    price: 0,
    visitDuration: 0,
});
const initLogRecord = new LogRecord();
let newlog: Map<string, any>;

export function logVisitDuration(duration: number) {
    newlog = initLogRecord.set("visitDuration", duration);
}
export function logPrice(price: number) {
    newlog = newlog.set("price", price);
}
export function submitLog() {
    logAddedToCartEvent(newlog.get("content_id"),
        newlog.get("visitDuration"),
        newlog.get("currency"),
        newlog.get("price"));
}

/**
 * This function will log AddedToCart App Event
 * @param {string} contentData
 * @param {string} contentId
 * @param {string} contentType
 * @param {string} currency
 * @param {number} price
 */
function logAddedToCartEvent(contentId, contentType, currency, price) {
    const params = {};
    // params[window.FB.AppEvents.ParameterNames.CONTENT] = contentData;
    params[window.FB.AppEvents.ParameterNames.CONTENT_ID] = contentId;
    params[window.FB.AppEvents.ParameterNames.CONTENT_TYPE] = contentType;
    params[window.FB.AppEvents.ParameterNames.CURRENCY] = currency;

    console.log(window.FB.AppEvents.ParameterNames);
    console.log("logAddedToCartEvent", params);
    window.FB.AppEvents.logEvent(window.FB.AppEvents.EventNames.ADDED_TO_CART, price, params);
}
