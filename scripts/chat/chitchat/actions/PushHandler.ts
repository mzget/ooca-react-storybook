import { Push } from "../chats/PushDataListener";
import { chitchatFactory } from "../../Chitchat";

export const PushHandler = (data: Push) => {
    console.log(data);

    const getStore = () => chitchatFactory.getStore();
};
