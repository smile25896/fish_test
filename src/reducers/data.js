import {
  GET_DATA,
  GET_DATA_ERROR,
  GET_DATA_SUCCESS,
} from 'constant';

const initState = {
  errors: null,
  isPending: false,
  data: [],
};

export default function(state = initState, action) {
  switch (action.type) {
    case GET_DATA:
      return { ...state, isPending: true };
    case GET_DATA_ERROR:
      return { ...state, isPending: false, errors: action.payload.errors };
    case GET_DATA_SUCCESS:
      return { ...state, isPending: false, data: action.payload.data };
    default:
      return state;
  }
}