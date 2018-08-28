import { combineReducers } from 'redux';

const girls = (state = {}, action) => {
    switch(action.type) {
        case 'UPDATE_GIRLS':
            return action.girls;
        default:
            return state;
    }
}

const group = (state = '0', action) => {
    switch(action.type) {
        case 'SET_GROUP':
            return action.group;
        default:
            return state;
    }
}

export default combineReducers({
    girls,
    group
});