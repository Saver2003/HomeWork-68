import React from 'react';
import './AddTaskForm.css';

import {connect} from 'react-redux';
import {changeText, saveTask} from "../toDoStore/actions";

const AddTaskForm = props => {
    return (
        <div className="AddTaskForm">
            <p key={props.text.id}><input className="AddTaskInput" type="text"
                      value={props.text} onChange={props.changeText}
                      placeholder="Add Task"/></p>
            <button className="btn" onClick={props.saveTask}>Add task</button>
        </div>
    );
};

const mapStateToProps = state => {
  return {
    text: state.text
  }
};

const mapDispatchToProps = dispatch => {
  return {
    saveTask: () => dispatch(saveTask()),
    changeText: (e) => dispatch(changeText(e.target.value))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTaskForm);