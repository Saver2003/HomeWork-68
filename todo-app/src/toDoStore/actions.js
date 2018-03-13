import axios from '../axios-todo';

export const SAVE_TASK = 'SAVE_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const FETCH_TASK_REQUEST = 'FETCH_TASK_REQUEST';
export const FETCH_TASK_SUCCESS = 'FETCH_TASK_SUCCESS';
export const FETCH_TASK_ERROR = 'FETCH_TASK_ERROR';
export const CHANGE_TEXT = 'CHANGE_TEXT';

export const saveTask = () => {
  return (dispatch, getState) => {
    dispatch(fetchTaskRequest());
    axios.post('/todo.json', {text: getState.text, id: getState.id}).then(response => {
      console.log(response.data);
      dispatch(fetchTaskSuccess(response.data))
    })
  }
};
export const changeText = (value) => {
  return{type: CHANGE_TEXT, value}
};

export const deleteTask = () => {
  return {type: DELETE_TASK}
};

export const fetchTaskRequest = () => {
  return {type: FETCH_TASK_REQUEST}
};

export const fetchTaskSuccess = (text) => {
  return {type: FETCH_TASK_SUCCESS, text: text || {}}
};

export const fetchTaskError = () => {
  return {type: FETCH_TASK_ERROR}
};

export const fetchTask = () => {
  return (dispatch) => {
    dispatch(fetchTaskRequest());
    
    axios.get('/todo.json').then(response => {
      // console.log(response.data)
      dispatch(fetchTaskSuccess(response.data))
    }, error => {
      dispatch(fetchTaskError())
    })
  }
};