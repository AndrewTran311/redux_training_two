import React, { Component } from 'react';
import Taskitem from './componentcontrol/Taskitem';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterName: '',
            filterStatus: -1 //all: -1 , active : 1 , deactive : 0
        }
    }
    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        var filter = {
            name: name === 'filterName' ? value : this.state.filterName,
            status: name === 'filterStatus' ? value : this.state.filterStatus
        };
        this.props.onFilterTask(filter);
        this.setState({
            [name]: value
        })
    }
    render() {
        var { tasks, filterTable, keyword, sort } = this.props;//var tasks = this.props.tasks
        if (filterTable.name) {
            tasks = tasks.filter((task) => {
                return task.name.toLowerCase().indexOf(filterTable.name.toLowerCase()) !== -1;
            })
        };

        tasks = tasks.filter((task) => {//nó sẽ tự  kiểm tra trường hợp null undifined và !==0
            if (filterTable.status === -1) {
                return task;

            } else {
                return task.status
                    === (filterTable.status === 1 ? true : false)
            }
        });
        // search
        tasks = tasks.filter((task) => {
            return task.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
        })
        // sort
        if (sort.by === 'name') {
            tasks.sort((a, b) => {
                if (a.name > b.name) return sort.value;
                else if (a.name < b.name) return -sort.value;
                else return 0;
            });
        } else {
            tasks.sort((a, b) => {
                if (a.status > b.status) return -sort.value;
                else if (a.status < b.status) return sort.value;
                else return 0;
            });
        }
        // var { filterName, filterStatus } = this.state;
        var elmTasks = tasks.map((task, index) => {
            return (
                < Taskitem
                    key={task.id}
                    index={index}
                    task={task}
                // onUpdate={this.props.onUpdate}
                />
            )
        })

        return (
            <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th className="text-center">STT</th>
                        <th className="text-center">Tên</th>
                        <th className="text-center">Trạng thái</th>
                        <th className="text-center">Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td>
                            <input
                                type="text"
                                name="filterName"
                                className="form-control"
                                value={filterTable.name}
                                onChange={this.onChange}
                            />
                        </td>
                        <td>
                            <select
                                name="filterStatus"
                                className="form-control"
                                value={filterTable.Status}
                                onChange={this.onChange}
                            >
                                <option value={-1}>Tất cả</option>
                                <option value={0}>Ẩn</option>
                                <option value={1}>Kích hoạt</option>
                            </select>
                        </td>
                        <td></td>
                    </tr>
                    {elmTasks}
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = state => {
    return {
        tasks: state.tasks,
        filterTable: state.filterTable,
        keyword: state.searchTask,
        sort: state.sortTask
    }
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        onFilterTask: (filter) => {
            dispatch(actions.filterTask(filter));
        }
    };

}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);