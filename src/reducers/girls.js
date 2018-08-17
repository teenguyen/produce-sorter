const girls = (state = [], action) => {
    switch(action.type) {
        case 'UPDATE_GIRLS':
            return [
                ...state,
                {
                    id: action.id,
                    girls: action.girls
                }
            ];
        default:
            return state;
    }
}

export default girls;