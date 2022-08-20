import * as types from '../contants/ActionTypes';

var initialState = {
    id : '',
    name : '',
    status : false
};  

var myReducers = (state = initialState, action) => {
    switch(action.type){
        case types.EDIT_TASK:
            return action.task;
        default : return state;
    }
};

export default myReducers;