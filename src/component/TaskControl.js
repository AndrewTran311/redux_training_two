import React, { Component } from 'react';
import Search from './componentcontrol/TaskSearch';
import TaskSort from './componentcontrol/TaskSort';

class TaskControl extends Component {
    render() {
        return (
            <div className="row mt-15">
                {/* search */} 
                    <Search/>
                 {/* sort */}
                    <TaskSort/>
                    
            </div>
        )
    }
}


export default TaskControl;
