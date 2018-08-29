import { combineReducers } from 'redux';

const trainees = (state = {}, action) => {
    switch(action.type) {
        case 'UPDATE_TRAINEES':
            return action.trainees;
        default:
            return state;
    }
}

const group = (state = {}, action) => {
    switch(action.type) {
        case 'SET_GROUP':
            return action.group;
        default:
            return state;
    }
}

const season = (state = {}, action) => {
    switch(action.type) {
        case 'SET_SEASON':
            return action.season;
        default:
            return state;
    }
}

export default combineReducers({
    trainees,
    group,
    season
});