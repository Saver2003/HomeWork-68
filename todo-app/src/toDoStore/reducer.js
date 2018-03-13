import {
  SAVE_TASK, DELETE_TASK, FETCH_TASK_REQUEST, FETCH_TASK_SUCCESS, FETCH_TASK_ERROR, CHANGE_TEXT
} from './actions';

const initialState = {
  text: '',
  loading: false,
  tasks: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_TASK:
      return {...state, text: state.text};
    case FETCH_TASK_REQUEST:
      return {...state, loading: true};
    case FETCH_TASK_SUCCESS:
      return {...state, tasks: action.text};
    case FETCH_TASK_ERROR:
      return {...state, loading: false};
    case CHANGE_TEXT:
      return {...state, text: action.value};
    default:
      return state
  }
};

export default reducer;