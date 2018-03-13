import React, {Component} from 'react';
import './ToDo.css';
import AddTaskForm from '../AddTaskForm/AddTaskForm';
import Tasks from '../Tasks/Tasks';

import {connect} from 'react-redux';
import {
  saveTask, deleteTask, fetchTask
} from "../toDoStore/actions";

class ToDo extends Component {
  // state = {
  //   tasks: [
  //     {text: 'Buy milk', id: 1},
  //     {text: 'Walk with dog', id: 2}
  //   ],
  //   textInput: ''
  // };
  //
  // componentDidMount() {
  //   this.props.fetchTask();
  // }
  
  // changeText = (event) => {
  //   this.setState({textInput: event.target.value});
  // };
  
  // addTask = () => {
  //   if (this.state.textInput === '') {
  //     return
  //   } else {
  //
  //     const newTask = {text: this.state.textInput, id: Date.now()};
  //     const tasks = [...this.state.tasks];
  //     tasks.push(newTask);
  //
  //     this.setState({tasks: tasks});
  //   }
  // };
  
  // removeTask = (id) => {
  //   const index = this.state.tasks.findIndex(img => img.id === id);
  //   const task = [...this.state.tasks];
  //   task.splice(index, 1);
  //
  //   this.setState({tasks: task})
  // };
  
  render() {
    return (
      <div className="ToDo">
        <AddTaskForm/>
        <Tasks/>
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return{
//     text: state.text
//   }
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     saveTask: () => dispatch(saveTask()),
//     deleteTask: () => dispatch(deleteTask()),
//     fetchTask: () => dispatch(fetchTask())
//   }
// };

export default ToDo;
