import {TOKEN} from './ActionTypes';
const initialState = {
  data: [],
  error: {},
};

export const token = function (state = initialState, action) {
  switch (action.type) {
    case TOKEN.SUCCESS:
      return {
        ...state,
        data: action.data,
        error: {},
      };
    case TOKEN.FAILURE:
      return {
        ...state,
        data: action.data,
        error: action.error,
      };
    default:
      return state;
  }
};
