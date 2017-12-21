import { chitchatFactory } from "../../Chitchat";
export const PushHandler = (data) => {
    console.log(data);
    const getStore = () => chitchatFactory.getStore();
};
