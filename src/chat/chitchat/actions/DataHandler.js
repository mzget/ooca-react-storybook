import { chitchatFactory } from "../../Chitchat";
import { getUsersPayload } from "./users/getUsersPayload";
export const OnPushHandler = (data) => {
    console.log("OnPushHandler", data);
    const getStore = () => chitchatFactory.getStore();
    if (data.event == "activeUser") {
        getUsersPayload().then(value => {
            console.log(value);
        }).catch(error => {
            console.warn(error);
        });
    }
};
export const OnDataHandler = (data) => {
    console.log("OnDataHandler", data);
    getUsersPayload().then(value => {
        console.log(value);
    }).catch(error => {
        console.warn(error);
    });
};
export default OnDataHandler;
