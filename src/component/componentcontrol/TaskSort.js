import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../../actions/index';

class TaskSort extends Component {
    
    onClick = (sortBy, sortValue) => {
        this.props.onSortTask({
            by : sortBy,
            value : sortValue
        })
    }
    
    
    
    render() {
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="dropdown">
                    <button
                        className="btn btn-primary dropdown-toggle btn_blu ml-5"
                        type="button"
                        id="dropdownMenu1"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="true">
                        Sắp xếp
                        <span className="fa-solid fa-caret-down ml-5"></span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li onClick={() => this.onClick('name', 1)}>
                            <p 
                            role="button"
                            className={(this.props.sort.by === 'name' && this.props.sort.value === 1 ) 
                            ? 'sort_selected' : ''}
                            >
                                <span className='ml-5'>
                                    Tên A-Z
                                </span>
                            </p>
                        </li>
                        <li onClick={() => this.onClick('name', -1)}>
                            <p role="button"
                            className={(this.props.sort.by === 'name' && this.props.sort.value === -1 ) 
                            ? 'sort_selected' : ''}>
                                <span className='ml-5'>
                                    Tên Z-A
                                </span>
                            </p>
                        </li>
                        <li role="separator" className="divider"></li>
                        <li onClick={() => this.onClick('status', 1)}>
                            <p role="button"
                            className={(this.props.sort.by === 'status' && this.props.sort.value === 1 ) 
                            ? 'sort_selected' : ''}>
                                <span className='ml-5'>
                                Trạng thái kích hoạt
                                </span>
                               
                            </p>
                        </li>   
                        <li onClick={() => this.onClick('status', -1)}>
                            <p role="button"
                            className={(this.props.sort.by === 'status' && this.props.sort.value === -1 ) 
                            ? 'sort_selected' : ''}>
                                <span className='ml-5'>
                                Trạng thái Ẩn
                                </span>
                                
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        sort : state.sortTask
    };
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        onSortTask: (sort) => {
            dispatch(actions.sortTask(sort));
        }
    };

}

export default connect(mapStateToProps, mapDispatchToProps)(TaskSort);
