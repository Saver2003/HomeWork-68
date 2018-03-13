import React, {Component} from 'react';
import Task from '../Task/Task';

import {connect} from 'react-redux';
import {fetchTask} from "../toDoStore/actions";

class Tasks extends Component {
  
  componentDidMount() {
    this.props.fetchTask();
  }
  
  render() {
    return (
      <div className="Tasks">
        <Task/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    text: state.text
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTask: () => dispatch(fetchTask())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);