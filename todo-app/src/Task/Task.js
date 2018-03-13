import React, {Component} from 'react';
import './Task.css';
import trash from '../Pic/trash.png';

import {connect} from 'react-redux';
import {deleteTask} from "../toDoStore/actions";

class Task extends Component {
  
  
  // console.log(props)
  render() {
    return (
      Object.keys(this.props.tasks).map(task => {
        return (
          <div className="Task" key={task}>{this.props.tasks[task].text}
            <img src={trash} alt="" onClick={() => this.props.deleteTask(task)}/>
          </div>
        )
      })
    )
  }
  
    
}

const mapStateToProps = state => {
  return {
    text: state.text,
    tasks: state.tasks
  }
};

const mapDispatchToProps = dispatch => {
  return {
    deleteTask: (id) => dispatch(deleteTask(id))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Task);