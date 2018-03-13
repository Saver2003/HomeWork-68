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
    axios.post('/todo.json', {text: getState().text}).then(response => {
      console.log(response);
      console.log(response.data);
      dispatch(fetchTask())
    })
  }
};
export const changeText = (value) => {
  return{type: CHANGE_TEXT, value}
};

export const deleteTask = (id) => {
  console.log(id)
  return (dispatch) => {
    dispatch(fetchTaskRequest());
    axios.delete(`/todo/${id}.json`).then(() => {
      dispatch(fetchTask());
    })
  }
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
      dispatch(fetchTaskSuccess(response.data))
    }, error => {
      dispatch(fetchTaskError())
    })
  }
};