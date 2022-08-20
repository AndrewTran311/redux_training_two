import * as types from '../contants/ActionTypes';

var initialState = '';

var myReducers = (state = initialState, action) => {
    switch(action.type){
        case types.SEARCH_TASK:
            return action.keyword;
        default : return state;
    }
};

export default myReducers;