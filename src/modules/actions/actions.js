import actions from './../actions/actionTypes';

export const setGroupList = group => ({
    type: actions.SET_GROUP_LIST,
    payload: group
});