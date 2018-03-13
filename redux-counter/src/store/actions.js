import axios from '../axios-counter';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const FETCH_COUNTER_REQUEST = 'FETCH_COUNTER_REQUEST';
export const FETCH_COUNTER_SUCCESS = 'FETCH_COUNTER_SUCCESS';
export const FETCH_COUNTER_ERROR = 'FETCH_COUNTER_ERROR';
export const FETCH_COUNTER_LOAD = 'FETCH_COUNTER_LOAD';

export const increaseCounter = () => {
  return (dispatch, getState) => {
    dispatch(fetchCounterRequest());
    axios.put('/counter.json', {counter: getState().counter + 1}).then(response => {
      dispatch(fetchCounterSuccess(response.data))
    })
  };
};

export const decrementCounter = () => {
  return (dispatch, getState) => {
    dispatch(fetchCounterRequest());
    axios.put('/counter.json', {counter: getState().counter - 1}).then(response => {
      dispatch(fetchCounterSuccess(response.data))
    })
  };
};

export const addCounter = () => {
  return (dispatch, getState) => {
    dispatch(fetchCounterRequest());
    axios.put('/counter.json', {counter: getState().counter + 5}).then(response => {
      dispatch(fetchCounterSuccess(response.data))
    })
  };
};

export const subtractCounter = () => {
  return (dispatch, getState) => {
    dispatch(fetchCounterRequest());
    axios.put('/counter.json', {counter: getState().counter - 5}).then(response => {
      dispatch(fetchCounterSuccess(response.data))
    })
  };
};

export const fetchCounterRequest = () => {
  return {type: FETCH_COUNTER_REQUEST};
};

export const fetchCounterSuccess = (counter) => {
  return {type: FETCH_COUNTER_SUCCESS, counter};
};

export const fetchCounterError = () => {
  return {type: FETCH_COUNTER_ERROR};
};

export const sendCounterLoad = (counter) => {
  return {type: FETCH_COUNTER_LOAD, counter};
};

export const fetchCounter = () => {
  return (dispatch, getState) => {
    dispatch(fetchCounterRequest());
    
    axios.get('/counter.json').then(response => {
      dispatch(fetchCounterSuccess(response.data))
    }, error => {
      dispatch(fetchCounterError())
    })
  }
};


