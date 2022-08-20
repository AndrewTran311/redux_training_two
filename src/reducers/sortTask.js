import * as types from '../contants/ActionTypes';


var initialState = {
    by: 'name',
    value: 1
};

var myReducers = (state = initialState, action) => {
    switch (action.type) {
        case types.SORT_TASK:
            return {
                by : action.sort.by,
                value : action.sort.value
            }
        default: return state;
    }
};

export default myReducers;