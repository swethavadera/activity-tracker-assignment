import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "./baseUrl";

export const getUsersData = (failureCallback) => (dispatch) => {
  return fetch(baseUrl)
    .then((response) => response.json())
    .then((response) =>
      dispatch({
        type: ActionTypes.TOKEN.SUCCESS,
        data: response,
      })
    )
    .catch(failureCallback);
};
