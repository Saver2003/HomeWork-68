import React, {Component} from 'react';
import './ToDo.css';
import AddTaskForm from '../AddTaskForm/AddTaskForm';
import Tasks from '../Tasks/Tasks';

class ToDo extends Component {
  render() {
    return (
      <div className="ToDo">
        <AddTaskForm/>
        <Tasks/>
      </div>
    );
  }
}

export default ToDo;
