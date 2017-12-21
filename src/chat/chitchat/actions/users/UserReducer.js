import { Record } from "immutable";
import { FETCH_USERS_PAYLOAD } from "./getUsersPayload";
/**
 * ## Initial State
 */
/**
 * ## Form
 * This Record contains the state of the form and the
 * fields it contains.
 */
export const StalkUserState = Record({
    isFetching: false,
    users: null,
    error: "",
});
const stalkUserInitState = new StalkUserState();
export function stalkUserReducer(state = stalkUserInitState, action) {
    switch (action.type) {
        case FETCH_USERS_PAYLOAD: {
            return state.set("users", action.payload);
        }
        default:
            return state;
    }
}
