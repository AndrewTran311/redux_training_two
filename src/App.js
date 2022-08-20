import './App.css';
import React, { Component } from 'react';
import TaskForm from './component/TaskForm';
import TaskControl from './component/TaskControl';
import TaskList from './component/TaskList';
import { connect } from 'react-redux';
import * as actions from './actions/index';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // isDisplayFrom: false,
      // taskEditing: null,
      // filter : {
      //   name : '',
      //   status : -1
      // },
      // keyword : '',
      sortBy : 'name',
      sortValue : 1
    }
  }


  
  // onToggleForm = () => {
  //   var { itemEditing } = this.props;
  //   if ( itemEditing && itemEditing.id !== '') {
  //       this.props.onOpenForm();
  //   }else{
  //     this.props.onToggleForm();
  //   }
  //   this.props.onClearTask({
  //       id : '',
  //       name : '',
  //       status : false
  //   })
  // }
  // onCloseForm = () => {
  //   this.setState({
  //     isDisplayForm: false
  //   })
  // }
  onShowForm = () => {
    this.setState({
      isDisplayFrom: true
    })
  }
  // onSubmit = (data) => {
  //   var { tasks } = this.state // tasks = this.state.tasks
  //   if (data.id === '') {
  //     data.id = this.testDataID();
  //     tasks.push(data);
  //   } else {
  //     // Editing
  //     var index = this.findIndex(data.id);
  //     tasks[index] = data;
  //   }

  //   this.setState({
  //     tasks: tasks,
  //     taskEditing: null
  //   });
  //   localStorage.setItem('tasks', JSON.stringify(tasks))
  // }

  // onUpdateStatus = (id) => {
  //   var { tasks } = this.state
  //   var index = this.findIndex(id);
  //   if (index !== -1) {
  //     tasks[index].status = !tasks[index].status;
  //     this.setState({
  //       tasks: tasks
  //     })
  //   }
  //   localStorage.setItem('tasks', JSON.stringify(tasks))
  // }
  // findIndex = (id) => {
  //   var { tasks } = this.state;
  //   var result = -1;
  //   tasks.forEach((task, index) => {
  //     if (task.id === id) {
  //       result = index;
  //     }
  //   });
  //   return result;
  // }
  // onDelete = (id) => {
  //   var { tasks } = this.state
  //   var index = this.findIndex(id);
  //   if (index !== -1) {
  //     tasks.splice(index, 1)
  //     this.setState({
  //       tasks: tasks
  //     })
  //     localStorage.setItem('tasks', JSON.stringify(tasks))
  //   }
  //   this.onCloseForm();
  // }
  // onUpdate = (id) => {
  //   var { tasks } = this.state
  //   var index = this.findIndex(id);
  //   var taskEditing = tasks[index]
  //   this.setState({
  //     taskEditing: taskEditing
  //   });
  //   this.onShowForm();
  // }

  // onFilter = (filterName, filterStatus) => {
  //   filterStatus = parseInt(filterStatus)
  //   this.setState({
  //     filter : {
  //       name : filterName.toLowerCase(),
  //       status : filterStatus
  //     }
  //   })
  // }
  // onSearch = (keyword) => {
  //   this.setState ({
  //     keyword : keyword
  //   })
  // }
  onSort = (sortBy, sortValue) => {
    this.setState({
      sortBy : sortBy,
      sortValue : sortValue
    })
  }

  render() {
    // var {
      //  isDisplayFrom, 
      //  taskEditing, 
      //  filter, 
      //  keyword,
      //  sortBy,
      // sortValue 
    // } = this.state; //var tasks = this.state.tasks
    var { isDisplayForm } = this.props;
    // if(filter) {
    //   if(filter.name){
    //     tasks = tasks.filter((task)=>{
    //       return task.name.toLowerCase().indexOf(filter.name) !== -1;
    //     })
    //   }
    //   tasks = tasks.filter((task)=>{
    //     if (filter.status === -1) {
    //       return task;
    //     }else {
    //       return task.status === (filter.status === 1 ? true : false)
    //     }
    //   })
    // }
    // if(keyword) {
    //     tasks = tasks.filter((task)=>{
    //       return task.name.toLowerCase().indexOf(keyword) !== -1;
    //   })
    // }
    // if (sortBy === 'name'){
    //   tasks.sort((a, b) =>{ 
    //     if(a.name > b.name) return sortValue;
    //     else if (a.name < b.name) return -sortValue; 
    //     else return 0;
    //   });
    // } else {
    //   tasks.sort((a, b) =>{ 
    //     if(a.status > b.status) return -sortValue;
    //     else if (a.status < b.status) return sortValue; 
    //     else return 0;
    //   });
    // }
    return (
      <div className='container'>
        <div className='text-center'>
          <h1>Quản lý công việc</h1>
        </div>
        <div className="row mt-15">
          <div className={isDisplayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ""}>
            {/* from */}
            <TaskForm/>

          </div>
          <div className={isDisplayForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8"
            : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.onToggleForm}>
              <span className="fa-solid fa-plus mr-5"></span> Thêm công việc
            </button>

            {/* search and sort */}
            <TaskControl 
            // onSearch = {this.onSearch}
            // onSort = { this.onSort}
            // sortBy ={sortBy}
            // sortValue ={ sortValue}
            />
            {/* list */}
            <div className="row mt-15">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-15">
                <TaskList
                  // onUpdate={this.onUpdate} 
                  // onFilter={this.onFilter}
                  />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
      isDisplayForm : state.isDisplayForm,
      itemEditing : state.itemEditing
  };
};
const mapDispatchToProps = ( dispatch, props) => {
    return {
      onToggleForm : () => {
        dispatch(actions.toggleForm());
      },
      onCloseForm: () => {
          dispatch(actions.closeForm());
      },
      onClearTask: (task) => {
          dispatch(actions.editTask(task));
      },
      onOpenForm: () => {
          dispatch(actions.openForm());
      }
    };
    
}

export default connect (mapStateToProps,mapDispatchToProps) (App);
