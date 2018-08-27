const girls = (state = [], action) => {
    switch(action.type) {
        case 'UPDATE_GIRLS':
            return [...state, { girls: action.girls }];
        default:
            return state;
    }
}

export default girls;