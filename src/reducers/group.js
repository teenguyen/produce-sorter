const group = (state = '0', action) => {
    switch(action.type) {
        case 'SET_GROUP':
            return action.group;
        default:
            return state;
    }
}

export default group;