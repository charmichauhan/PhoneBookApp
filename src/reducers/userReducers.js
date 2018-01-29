import {UPDATE_DATA, ADD_DATA, DELETE_DATA, ALL_DATA} from 'actions/message-actions'

export default function (initialState) {
    return (state=initialState, action) => {
        switch(action.type) {
            case UPDATE_DATA:
                return Object.assign({}, state, { currentData: action.data });
            case ADD_DATA:
                const text = state.currentData.trim();
                if (text) {
                    let data = state.data.map(message => Object.assign({}, data));
                    data.push({id: data.length + 1, text});
                    return {
                        data,
                        currentData: ''
                    };
                };
            case DELETE_DATA:
                return Object.remove({}, state, { currentData: action.id });
            case ALL_DATA:
                return Object.assign({}, state, { data });
            default:
                return state;
        }
    }
}