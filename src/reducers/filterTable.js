import * as types from '../contants/ActionTypes';

var initialState = {
    name : '',
    status : -1
};  

var myReducers = (state = initialState, action) => {
    switch(action.type){
        case types.FILTER_TABLE:
            return {
            name : action.filter.name,
            status : parseInt(action.filter.status)
        }
        default : return state;
    }
};

export default myReducers;