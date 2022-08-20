import * as types from '../contants/ActionTypes';

var initialState = false;// close From  

var myReducers = (state = initialState, action) => {
    switch(action.type){
        case types.TOGGLE_FORM:
            return !state;
        case types.OPEN_FORM:
            return true;
        case types.CLOSE_FORM:
            return false;
        default : return state;
    }
};

export default myReducers;