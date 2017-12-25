import { Record } from "immutable";
// const FB = window.FB;
export function logPageView() {
    if (window.FB) {
        window.FB.AppEvents.logPageView();
    }
    else {
        console.warn("Have no fb.init...");
    }
}
export const AnalyticConst = {
    LOG_APPOINTMENT: "appointment",
    LOG_APPOINTMENT_DETAILS: "appointment_details",
    LOG_APPOINTMENT_ID: "appointment_id",
    LOG_APPOINTMENT_TAG: "appointment_tags",
    LOG_CATEGORY: "category",
    LOG_COUPON: "coupon",
    LOG_DOCTOR_ID: "doctor",
    LOG_DOCTOR_NAME: "doctor_name",
    LOG_PAYMENT_CHANNEL: "payment_channel",
};
const LogRecord = Record({
    category: "",
    content_id: AnalyticConst.LOG_APPOINTMENT,
    coupon: 0,
    currency: "THB",
    doctor: "",
    doctorName: "",
    price: 0,
    topics: [],
    visitDuration: 0,
});
const initLogRecord = new LogRecord();
let newlog;
export function logVisitDuration(duration) {
    newlog = initLogRecord.set("visitDuration", duration);
}
export function logDoctor(doctorId, doctorName) {
    newlog = newlog.set("doctor", doctorId)
        .set("doctorName", doctorName);
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
        params[AnalyticConst.LOG_DOCTOR_ID] = newlog.get("doctor");
        params[AnalyticConst.LOG_DOCTOR_NAME] = newlog.get("doctorName");
        params[AnalyticConst.LOG_COUPON] = newlog.get("coupon");
        params[AnalyticConst.LOG_APPOINTMENT_TAG] = newlog.get("topics");
        params[AnalyticConst.LOG_CATEGORY] = newlog.get("category");
        logAddedToCartEvent(newlog.get("price"), params);
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
export function logTopics(topics, doctorId, doctorName) {
    topics.map((value) => {
        const params = {};
        const topic = withTopic(value.id, value.name.th)(params);
        const doctor = withDoctor(doctorId, doctorName)(topic);
        log_topicEvent(doctor);
    });
}
export function logTopup(channel, price) {
    logTopupEvent(channel, price);
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
function withDoctor(doctorId, dockerName) {
    return (params) => {
        params.doctor_id = doctorId;
        params.docker_name = dockerName;
        return params;
    };
}
function withTopic(topicId, topicName) {
    return (params) => {
        params.topic_id = topicId;
        params.topic_name = topicName;
        return params;
    };
}
/**
 * This function will log log_topic App Event
 * @param {string} topicId
 * @param {string} topicName
 * @param {number} valToSum
 */
function log_topicEvent(params, valToSum = 1) {
    if (window.FB) {
        console.log("log_topic", params);
        window.FB.AppEvents.logEvent("log_topic", valToSum, params);
    }
}
/**
 * This function will log topup App Event
 * @param {string} topupChannel
 * @param {number} valToSum
 */
function logTopupEvent(topupChannel, valToSum = 0) {
    if (window.FB) {
        const params = {};
        params.topup_channel = topupChannel;
        window.FB.AppEvents.logEvent("topup", valToSum, params);
    }
}
