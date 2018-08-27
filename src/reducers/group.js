const group = (state = [], action) => {
    switch(action.type) {
        case 'SET_GROUP':
            return [...state, { group: action.group }];
        default:
            return state;
    }
}

export default group;