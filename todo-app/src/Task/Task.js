import React from 'react';
import './Task.css';
import trash from '../Pic/trash.png';

import {connect} from 'react-redux';
import {deleteTask} from "../toDoStore/actions";

const Task = props => {
  // console.log(props)
  return(
    Object.keys(props.tasks).map(task => {
      return (
        <div className="Task">{props.tasks[task].text}
          <img src={trash} alt="" onClick={props.deleteTask}/>
        </div>
      )
    })
  )
  
    
};

const mapStateToProps = state => {
  return {
    text: state.text,
    tasks: state.tasks
  }
};

const mapDispatchToProps = dispatch => {
  return {
    deleteTask: () => dispatch(deleteTask())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Task);