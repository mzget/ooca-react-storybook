import { Record } from "immutable";
// const FB = window.FB;
export const AnalyticConst = {
    LOG_APPOINTMENT: "appointment",
    LOG_APPOINTMENT_DETAILS: "appointment_details",
    LOG_APPOINTMENT_ID: "appointment_id",
    LOG_APPOINTMENT_TAG: "appointment_tags",
    LOG_CATEGORY: "category",
    LOG_COUPON: "coupon",
    LOG_DOCTOR_ID: "doctor",
    LOG_PAYMENT_CHANNEL: "payment_channel",
};
const LogRecord = Record({
    category: "",
    content_id: AnalyticConst.LOG_APPOINTMENT,
    coupon: 0,
    currency: "THB",
    doctor: "",
    price: 0,
    topics: [],
    visitDuration: 0,
});
const initLogRecord = new LogRecord();
let newlog;
export function logVisitDuration(duration) {
    newlog = initLogRecord.set("visitDuration", duration);
}
export function logDoctor(doctorId) {
    newlog = newlog.set("doctor", doctorId);
}
export function logCoupon(coupon) {
    newlog = newlog.set("coupon", coupon);
}
export function logPrice(price) {
    newlog = newlog.set("price", price);
}
export function logTag(topics) {
    newlog = newlog.set("topics", JSON.stringify(topics));
}
export function logCategory(category) {
    newlog = newlog.set("category", category);
}
export function submitLog() {
    if (window.FB) {
        const params = {};
        params[window.FB.AppEvents.ParameterNames.CONTENT_ID] = newlog.get("content_id");
        params[window.FB.AppEvents.ParameterNames.CONTENT_TYPE] = newlog.get("visitDuration");
        params[window.FB.AppEvents.ParameterNames.CURRENCY] = newlog.get("currency");
        params[AnalyticConst.LOG_DOCTOR_ID] = newlog.get(AnalyticConst.LOG_DOCTOR_ID);
        params[AnalyticConst.LOG_COUPON] = newlog.get(AnalyticConst.LOG_COUPON);
        params[AnalyticConst.LOG_APPOINTMENT_TAG] = newlog.get("topics");
        params[AnalyticConst.LOG_CATEGORY] = newlog.get(AnalyticConst.LOG_CATEGORY);
        logAddedToCartEvent(newlog.get("price"), params);
    }
}
/**
 * This function will log videoCall App Event
 * @param {string} appointmentId
 * @param {string} reservedDuration
 * @param {string} startedTime
 */
export function logVideoCallEvent(appointmentId, reservedDuration, type) {
    if (window.FB) {
        const params = {};
        params.appointment_id = appointmentId;
        params.reserved_duration = reservedDuration;
        params.type = type;
        console.log("logVideoCallEvent", params);
        window.FB.AppEvents.logEvent("videoCall", null, params);
    }
}
export function purchase(amount, productId, channel) {
    if (window.FB) {
        const params = {};
        params[window.FB.AppEvents.ParameterNames.CONTENT_ID] = AnalyticConst.LOG_APPOINTMENT;
        params[AnalyticConst.LOG_APPOINTMENT_ID] = productId;
        params[AnalyticConst.LOG_PAYMENT_CHANNEL] = channel;
        logPurchase(amount, "THB", params);
    }
}
/**
 * This function will log AddedToCart App Event
 * @param {string} contentData
 * @param {string} contentId
 * @param {string} contentType
 * @param {string} currency
 * @param {number} price
 */
function logAddedToCartEvent(price, params) {
    console.log("logAddedToCartEvent", params);
    window.FB.AppEvents.logEvent(window.FB.AppEvents.EventNames.ADDED_TO_CART, price, params);
}
function logPurchase(purchaseAmount, currency = "THB", parameters) {
    console.log("logPurchase", purchaseAmount, parameters);
    window.FB.AppEvents.logPurchase(purchaseAmount, currency, parameters);
}
