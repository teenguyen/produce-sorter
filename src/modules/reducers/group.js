import { GIRLS } from './../util/Girls';
import actions from './../actions/actionTypes';

export const group = (state = GIRLS, action) => {
    switch(action.type) {
        case actions.SET_GROUP_LIST:
            return { ...state, group: [...state.group, action.payload] };
        default:
            return state;
    }
}