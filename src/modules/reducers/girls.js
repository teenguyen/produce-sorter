import { GIRLS } from './../util/Girls';
import actions from './../actions/actionTypes';

export const girls = (state = GIRLS, action) => {
    switch(action.type) {
        case actions.SET_GIRLS_LIST:
            return action.girls;
        default:
            return state;
    }
}